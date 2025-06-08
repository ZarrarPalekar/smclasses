import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
  phone: "",
};
export const Contact = (props) => {
  const [{ name, email, message, phone }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => {
    setState({ ...initialState });
    alert("Enquiry Email sent successfully");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          clearState();
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Please fill out the form below to send us an email and we will get
            back to you as soon as possible.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-form-card">
            <form name="sentMessage" validate onSubmit={handleSubmit}>
              <div className="contact-row">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                  onChange={handleChange}
                  value={name}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  value={email}
                />
              </div>
              <div className="contact-row">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                  value={phone}
                />
              </div>
              <div className="contact-row">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                  value={message}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg contact-btn"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-item">
              <i className="fa fa-map-marker"></i>
              <div>
                <span>Address</span>
                <p>{props.data ? props.data.address : "loading"}</p>
              </div>
            </div>
            <div className="contact-info-item">
              <i className="fa fa-phone"></i>
              <div>
                <span>Phone</span>
                <p>{props.data ? props.data.phone : "loading"}</p>
              </div>
            </div>
            <div className="contact-info-item">
              <i className="fa fa-envelope-o"></i>
              <div>
                <span>Email</span>
                <p>{props.data ? props.data.email : "loading"}</p>
              </div>
            </div>
            <div className="contact-social">
              <a
                href={props.data ? `//${props.data.facebook}` : "/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href={props.data ? `//${props.data.twitter}` : "/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href={props.data ? `//${props.data.youtube}` : "/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-section">
        <div className="container text-center">
          <p>
            &copy; 2025 SM Classes Developed by{" "}
            <a href="https://www.zarrarpalekar.com" rel="nofollow">
              Zarrar Palekar
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
};
