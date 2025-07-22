import React from "react";

const Contact = () => {
  return (
    <div>
     
      <section className="section contact">
        <h2 className="title">Contact</h2>
        <div className="contact-wrapper">
          <form action="" className="contact-form">
            <h3>Let's Work Together </h3>
            <div className="field-box">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Phone Number" required />
              <input type="text" placeholder="Email Subject" required />

              <textarea
                name=""
                id=""
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="contact-btn">
              <button type="submit" className="btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
