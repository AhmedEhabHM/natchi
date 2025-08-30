"use client"

const ContactMap = () => {
  return (
    <div style={{ width: "100%" }} className="contact-map-container">
      {/* Google Maps Section */}
      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.2!2d39.1637!3d21.4858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI5JzA5LjAiTiAzOcKwMDknNDkuMyJF!5e0!3m2!1sen!2ssa!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Natchi Beach Club Location"
        ></iframe>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
          minHeight: "200px",
          padding: "40px 20px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Address Card */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "30px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              minWidth: "280px",
              maxWidth: "320px",
              flex: "1",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#ff6b35",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px auto",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V10H4V20H20V10H22V7L12 2ZM6 18V10H10V18H6ZM14 18V10H18V18H14Z" fill="white" />
              </svg>
            </div>
            <h5
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#333",
                margin: "0 0 15px 0",
              }}
            >
              Address
            </h5>
            <p
              style={{
                color: "#666",
                margin: "0",
                lineHeight: "1.5",
                fontSize: "14px",
              }}
            >
              Al-Malik As-Salih Ayyub Ibn Al-Kamil,
              <br />
              Al-Muruj District, Jeddah 23842,
              <br />
              Kingdom of Saudi Arabia.
            </p>
          </div>

          {/* Contact Card */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "30px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              minWidth: "280px",
              maxWidth: "320px",
              flex: "1",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#ff6b35",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px auto",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                  fill="white"
                />
              </svg>
            </div>
            <h5
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#333",
                margin: "0 0 15px 0",
              }}
            >
              Contact
            </h5>
            <p
              style={{
                color: "#666",
                margin: "0",
                fontSize: "14px",
              }}
            >
              Mobile: +966563069010
            </p>
          </div>

          {/* Office Hours Card */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "30px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              minWidth: "280px",
              maxWidth: "320px",
              flex: "1",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#ff6b35",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px auto",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 13H8V11H11V7H13V13Z"
                  fill="white"
                />
              </svg>
            </div>
            <h5
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#333",
                margin: "0 0 15px 0",
              }}
            >
              Office Hour
            </h5>
            <p
              style={{
                color: "#666",
                margin: "0 0 8px 0",
                fontSize: "14px",
              }}
            >
              Monday - Friday: 8:30 - 20:00
            </p>
            <p
              style={{
                color: "#666",
                margin: "0",
                fontSize: "14px",
              }}
            >
              Saturday & Sunday: 9:30 - 21:30
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMap

