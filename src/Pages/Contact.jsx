import React, { useState } from "react";
import "../Styles/Contact.css";
import toast from "react-hot-toast";
import { server } from "../config";
import { Link } from "react-router-dom";

const isAuthenticated = localStorage.getItem("travel-token");

function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContact = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isAuthenticated) {
      toast.error("Please login to send a message.");
      setLoading(false);
      return;
    }

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields.");
      setLoading(false);
      return;
    }

    const toastId = toast.loading("Sending message...");

    try {
      const response = await fetch(`${server}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responsedata = await response.json();

      if (responsedata.success) {
        toast.success("Message sent successfully.", { id: toastId });
      } else {
        toast.error(responsedata.error || "An error occurred. Please try again.", { id: toastId });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <div className="contain">
        <Link to='/'><div className="icon">
          <i className="fa-solid fa-arrow-left"></i>
        </div></Link>
        <div className="wrapper">
          <div className="form">
            <h4>GET IN TOUCH</h4>
            <h2 className="form-headline">Send Us a Message</h2>
            <form id="submit-form" onSubmit={handleContact}>
              <p>
                <input
                  id="name"
                  className="form-input"
                  type="text"
                  placeholder="Your Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <small className="name-error"></small>
              </p>
              <p>
                <input
                  id="email"
                  className="form-input"
                  type="email"
                  placeholder="Your Email*"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <small className="name-error"></small>
              </p>
              <p className="full-width">
                <input
                  id="Subject"
                  className="form-input"
                  type="text"
                  placeholder="Subject*"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                <small></small>
              </p>
              <p className="full-width">
                <textarea
                  minlength="20"
                  id="message"
                  cols="30"
                  rows="7"
                  placeholder="Your Message*"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <small></small>
              </p>
              <p className="full-width">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  checked
                  onChange={(e) => handleInputChange(e, 'checkbox')}
                /> Yes, I would like to receive communications by call / email about the latest travel deals and offers.
              </p>
              <p className="full-width">
                <button disabled={loading} type="submit" className="submit-btn">
                  {loading ? "Submitting..." : "Submit"}
                </button>
                <button
                  type="reset"
                  className="reset-btn"
                  onClick={() =>
                    setFormData({
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                    })
                  }
                >
                  Reset
                </button>
              </p>
            </form>
          </div>
          <div className="contacts contact-wrapper">
            <ul>
              <li>
                Explore the world with our exclusive travel packages and personalized itineraries. Contact us today to start your adventure!
              </li>
              <span className="hightlight-contact-info">
                <li className="email-info">
                  <i className="fa fa-envelope" aria-hidden="true"></i> info@travelagency.com
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                  <span className="highlight-text">+91 11 1111 2900</span>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
