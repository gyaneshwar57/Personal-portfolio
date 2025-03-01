import React from "react";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact Me</h1>
      <p>Feel free to reach out for collaboration, job opportunities, or just to say hi! 👋</p>

      {/* Contact Information */}
      <div className="contact-info">
        <p>📞 <b>Phone:</b> <a href="tel:+9390216196">9390216196</a></p>
        <p>📧 <b>Email:</b> <a href="mailto:suryavanshigyaneshwar@gmail.com">suryavanshigyaneshwar@gmail.com</a></p>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
