import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Helper: get months and days starting from a given date
function getMonthsAndDays(startDate, monthsCount = 12) {
  const monthsArr = [];
  let date = new Date(startDate);
  
  for (let m = 0; m < monthsCount; m++) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = [];
    let d = new Date(year, month, 1);
    
    while (d.getMonth() === month) {
      if (d >= new Date(startDate)) {
        days.push(new Date(d));
      }
      d.setDate(d.getDate() + 1);
    }
    
    monthsArr.push({
      month: date.toLocaleString('default', { month: 'long', year: 'numeric' }),
      days,
    });
    
    // Move to next month
    date = new Date(year, month + 1, 1);
  }
  
  return monthsArr;
}

// Spinner component
const Spinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 120 }}>
    <div className="spinner-border text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function BookingResort() {
  const today = new Date().toISOString().split('T')[0];
  const [step, setStep] = useState(0);
  const swiperRef = useRef(null);
  const [form, setForm] = useState({
    service: '',
    persons: 1,
    date: today,
    startTime: '08:00',
    endTime: '18:00',
    chosenDate: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
    payment: '',
  });

  // For unlimited months, start with 12 months
  const [visibleMonths, setVisibleMonths] = useState(120); // 10 years * 12 months
  const [loading, setLoading] = useState(false);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(step);
    }
  }, [step]);

  useEffect(() => {
    if (step === 1 && form.chosenDate) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(2);
      }, 1200);
    }
  }, [form.chosenDate, step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const steps = ['Service', 'Date', 'Details', 'Payment', 'Done'];

  // Get months and days for date selection
  const monthsArr = getMonthsAndDays(form.date, visibleMonths);

  // Responsive grid configuration
  const getGridConfig = () => {
    if (window.innerWidth >= 1400) return { rows: 10, cols: 9}; // Big screen - reduced to 6 cols
    if (window.innerWidth >= 1200) return { rows: 10, cols: 7 }; // Laptop - reduced to 5 cols
    if (window.innerWidth >= 768) return { rows: 10, cols: 5 };  // Tablet - reduced to 4 cols
    if (window.innerWidth >= 576) return { rows: 10, cols: 3 };  // Large mobile - reduced to 2 cols
    return { rows: 10, cols: 2 }; // Medium/small mobile - reduced to 1 col
  };

  const [gridConfig, setGridConfig] = useState(getGridConfig());

  // Update grid config on window resize
  useEffect(() => {
    const handleResize = () => {
      setGridConfig(getGridConfig());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Build grid: page-based navigation without month repetition
  const buildGrid = () => {
    const { rows, cols } = gridConfig;
    
    // Safety check: ensure we have valid grid dimensions
    if (!rows || !cols || rows <= 0 || cols <= 0) {
      return Array.from({ length: 3 }, () => []); // fallback to 3 columns
    }
    
    const grid = Array.from({ length: cols }, () => []);
    
    // Calculate total items per page
    const itemsPerPage = rows * cols;
    const startIndex = currentPage * itemsPerPage;
    
    // Flatten all months and days into a single array
    let allItems = [];
    monthsArr.forEach((monthObj, monthIndex) => {
      // Add month header only once per month
      allItems.push({ type: 'month', label: monthObj.month, monthIndex, isFirstOccurrence: true });
      
      // Add all days for this month
    monthObj.days.forEach(day => {
        allItems.push({ type: 'day', date: day });
      });
    });
    
    // Get items for current page
    const pageItems = allItems.slice(startIndex, startIndex + itemsPerPage);
    
    // Distribute items across columns
    let currentCol = 0;
    let currentRow = 0;
    
    pageItems.forEach((item) => {
      if (currentCol >= cols) return;
      
      grid[currentCol].push(item);
      currentRow++;
      
      if (currentRow >= rows) {
        currentRow = 0;
        currentCol++;
      }
    });
    
    return grid;
  };

  const gridColumns = buildGrid();

  // Calculate total pages
  const totalItems = monthsArr.reduce((total, month) => total + month.days.length + 1, 0); // +1 for month headers
  const totalPages = Math.ceil(totalItems / (gridConfig.rows * gridConfig.cols));

  // Month/Day slider functions
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      console.log('Next page clicked, new page:', currentPage + 1); // Debug log
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      console.log('Prev page clicked, new page:', currentPage - 1); // Debug log
    }
  };

  const goToMonth = (monthIndex) => {
    setCurrentMonthIndex(monthIndex);
    console.log('Go to month clicked, index:', monthIndex); // Debug log
  };

  return (
    <div className="container mt-5 BookingResort 50vh" style={{ maxWidth: '80%', margin: '0 auto' }}>
      {/* Stepper Header */}
      <div className="d-flex justify-content-between mb-4">
        {steps.map((title, idx) => (
          <div
            key={title + idx}
            className={`fw-bold px-2 py-1 ${step === idx ? 'text-warning border-bottom border-warning' : 'text-secondary'}`}
            style={{ flex: 1, textAlign: 'center', fontSize: '0.95rem' }}
          >
            {/* Show text on larger screens, circles on mobile */}
            <span className="d-none d-md-inline">{idx + 1}. {title}</span>
            <span className="d-md-none">
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: step === idx ? '#ffc107' : '#6c757d',
                  margin: '0 auto',
                  border: step === idx ? '2px solid #ffc107' : '2px solid #6c757d'
                }}
              />
            </span>
          </div>
        ))}
      </div>
      <Swiper
        allowTouchMove={false}
        slidesPerView={1}
        initialSlide={step}
        onSlideChange={(swiper) => setStep(swiper.activeIndex)}
        ref={swiperRef}
      >
        {/* 1. Service */}
        <SwiperSlide>
          <h5 className="mb-3">Please select service:</h5>
          <div className="mb-3">
            <label className="form-label">Service</label>
            <select
              className="form-select"
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              <option value="">Select Service</option>
              <option value="men">Men's Ticket Booking (1 day)</option>
              <option value="couple">Couples Ticket Booking (1 day)</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Number of Persons</label>
            <select
              className="form-select"
              name="persons"
              value={form.persons}
              onChange={handleChange}
            >
              {[...Array(9)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">I'm available on or after</label>
            <input
              type="date"
              className="form-control"
              name="date"
              min={today}
              value={form.date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                <span key={day} className="badge bg-secondary">{day}</span>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Start from</label>
            <input
              type="time"
              className="form-control"
              name="startTime"
              min="08:00"
              max="18:00"
              value={form.startTime}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Finish by</label>
            <input
              type="time"
              className="form-control"
              name="endTime"
              min="08:00"
              max="18:00"
              value={form.endTime}
              onChange={handleChange}
            />
          </div>
        </SwiperSlide>

        {/* 2. Date Selection */}
        <SwiperSlide>
          <h5 className="mb-3">
            Below you can find a list of available time slots for <b>{form.service === 'men' ? "Men's Ticket Booking" : "Couples Ticket Booking"}</b>.<br />
            Click on a time slot to proceed with booking.
          </h5>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', marginBottom: '20px', minHeight: '400px' }}>
                <div className="d-flex" style={{ 
                  width: '100%', 
                  maxWidth: `${Math.min(gridConfig.cols * 110, 660)}px`,
                  gap: '6px',
                  justifyContent: 'center'
                }}>
                  {gridColumns.map((col, colIdx) => (
                    <div key={colIdx} className="d-flex flex-column gap-2" style={{ 
                      flex: 1,
                      minWidth: '100px',
                      maxWidth: '110px'
                    }}>
                      {col.map((item, idx) =>
                        item.type === 'month' ? (
                          <div key={`month-${colIdx}-${idx}`} data-month-index={item.monthIndex}>
                            <div
                              className="w-100 d-flex align-items-center justify-content-center"
                              style={{
                                background: '#ff8800',
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: '0.85rem',
                                borderRadius: 8,
                                height: 60,
                                width: '100%',
                              }}
                            >
                              {item.label}
                            </div>
                          </div>
                        ) : (
                          <div key={item.date.toISOString()}>
                            <label
                              className={`w-100 btn btn-light border d-flex align-items-center justify-content-center`}
                              style={{
                                borderWidth: form.chosenDate === item.date.toISOString().split('T')[0] ? 2 : 1,
                                borderColor: form.chosenDate === item.date.toISOString().split('T')[0] ? '#ff8800' : '#ccc',
                                borderRadius: 8,
                                fontWeight: 500,
                                color: '#333',
                                boxShadow: form.chosenDate === item.date.toISOString().split('T')[0] ? '0 0 0 2px #ff8800' : 'none',
                                height: 65,
                                width: '100%',
                                minHeight: '65px'
                              }}
                            >
                              <input
                                type="radio"
                                name="chosenDate"
                                value={item.date.toISOString().split('T')[0]}
                                checked={form.chosenDate === item.date.toISOString().split('T')[0]}
                                onChange={handleChange}
                                style={{ marginRight: 6, accentColor: '#ff8800' }}
                                disabled={loading}
                              />
                              <span style={{ 
                                textAlign: 'center',
                                fontSize: '0.8rem',
                                lineHeight: '1.1'
                              }}>
                                {item.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                              </span>
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Month Navigation - Only arrows, no NEXT button */}
              <div className="d-flex justify-content-center mt-3">
                <div className="d-flex gap-2">
                  <button 
                    className="btn btn-outline-warning"
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    style={{ width: '50px', height: '40px' }}
                  >
                    ←
                  </button>
                  <button 
                    className="btn btn-outline-warning"
                    onClick={nextPage}
                    disabled={currentPage === totalPages - 1}
                    style={{ width: '50px', height: '40px' }}
                  >
                    →
                  </button>
                </div>
              </div>
            </>
          )}
        </SwiperSlide>

        {/* 3. Details */}
        <SwiperSlide>
          <h5 className="mb-3">Enter your details:</h5>
          <input
            type="text"
            className="form-control mb-2"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-2"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-control mb-2"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            className="form-control mb-2"
            name="notes"
            placeholder="Notes"
            value={form.notes}
            onChange={handleChange}
          />
        </SwiperSlide>

        {/* 4. Payment */}
        <SwiperSlide>
          <h5 className="mb-3">Payment</h5>
          <input
            type="text"
            className="form-control mb-3"
            name="payment"
            placeholder="Card Number"
            value={form.payment}
            onChange={handleChange}
          />
        </SwiperSlide>

        {/* 5. Done */}
        <SwiperSlide>
          <div className="alert alert-success mt-5">
            <h4>Booking Successful!</h4>
            <p>
              Thank you, <b>{form.name}</b>.<br />
              Your booking for <b>{form.service === 'men' ? "Men's Ticket" : "Couples Ticket"}</b> on <b>{form.chosenDate}</b> is confirmed.<br />
              Persons: <b>{form.persons}</b><br />
              Time: <b>{form.startTime}</b> to <b>{form.endTime}</b>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Unified Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <button 
          className="btn btn-warning" 
          onClick={prevStep} 
          disabled={step === 0 || loading}
        >
          BACK
        </button>
        <button 
          className="btn btn-warning" 
          onClick={nextStep} 
          disabled={
            (step === 0 && (!form.service || !form.persons || !form.date || !form.startTime || !form.endTime || form.startTime >= form.endTime)) ||
            (step === 1 && !form.chosenDate) ||
            (step === 2 && (!form.name || !form.phone || !form.email)) ||
            (step === 3 && !form.payment) ||
            step === 4 ||
            loading
          }
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default BookingResort;