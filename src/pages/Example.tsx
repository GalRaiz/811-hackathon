import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNext = () => {
    // Handle form submission or navigate to next step
    alert("Next button clicked");
  };

  const handleBack = () => {
    // Handle back navigation
    alert("Back button clicked");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.5,
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#0A3B2E",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2>טופס בקשת שירות</h2>
      </div>

      {/* Main Content */}
      <div style={{ padding: "20px", backgroundColor: "#F4F4F4" }}>
        <p style={{ fontSize: "15px", marginBottom: "20px" }}>מי יצירת קשר?</p>
        <form>
          {/* Name Input */}
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="שם מלא"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Phone Input */}
          <div style={{ marginBottom: "15px" }}>
            <input
              type="tel"
              placeholder="טלפון נייד"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Email Input */}
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              placeholder="אימייל"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Message Input */}
          <div style={{ marginBottom: "15px" }}>
            <textarea
              placeholder="הודעה"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
          </div>
        </form>
      </div>

      {/* Footer Navigation Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          backgroundColor: "#fff",
        }}
      >
        <button
          onClick={handleBack}
          style={{
            backgroundColor: "#ccc",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          חזרה
        </button>
        <button
          onClick={handleNext}
          style={{
            backgroundColor: "#0A3B2E",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          הבא
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
