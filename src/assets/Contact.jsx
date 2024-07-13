import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactSubject: "",
    contactMessage: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.contactName || formData.contactName.length < 2) {
      errors.contactName =
        "Name is required and should be at least 2 characters.";
    }
    if (!formData.contactEmail) {
      errors.contactEmail = "Email is required.";
    }
    if (!formData.contactMessage) {
      errors.contactMessage = "Message is required.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setFormStatus("error");
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    setFormStatus("success");

    // Reset form
    setFormData({
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
    });
    setFormErrors({});
  };

  return (
    <div>
      <section id="contact" className="s-contact">
        <div className="overlay"></div>
        <div className="contact__line"></div>

        <div className="row section-header" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Contact Us</h3>
            <h1 className="display-2 display-2--light">
              Reach out for a new project or just say hello
            </h1>
          </div>
        </div>

        <div className="row contact-content" data-aos="fade-up">
          <div className="contact-primary">
            <h3 className="h6">Send Us A Message</h3>

            <form
              name="contactForm"
              id="contactForm"
              onSubmit={handleSubmit}
              noValidate
            >
              <fieldset>
                <div className="form-field">
                  <input
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Your Name"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="full-width"
                  />
                  {formErrors.contactName && (
                    <p className="error">{formErrors.contactName}</p>
                  )}
                </div>
                <div className="form-field">
                  <input
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Your Email"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                    className="full-width"
                  />
                  {formErrors.contactEmail && (
                    <p className="error">{formErrors.contactEmail}</p>
                  )}
                </div>
                <div className="form-field">
                  <input
                    name="contactSubject"
                    type="text"
                    id="contactSubject"
                    placeholder="Subject"
                    value={formData.contactSubject}
                    onChange={handleChange}
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <textarea
                    name="contactMessage"
                    id="contactMessage"
                    placeholder="Your Message"
                    rows="10"
                    required
                    value={formData.contactMessage}
                    onChange={handleChange}
                    className="full-width"
                  ></textarea>
                  {formErrors.contactMessage && (
                    <p className="error">{formErrors.contactMessage}</p>
                  )}
                </div>
                <div className="form-field">
                  <button type="submit" className="full-width btn--primary">
                    Submit
                  </button>
                  <div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>

            {formStatus === "error" && (
              <div className="message-warning text-red-600">
                Something went wrong. Please try again.
              </div>
            )}

            {formStatus === "success" && (
              <div className="message-success">
                Your message was sent, thank you!
                <br />
              </div>
            )}
          </div>

          <div className="contact-secondary">
            <div className="contact-info">
              <h3 className="h6 hide-on-fullwidth">Contact Info</h3>

              <div className="cinfo">
                <h5>Where to Find Us</h5>
                <p>
                  1067 E 2ND PL
                  <br />
                  MESA, AZ
                </p>
              </div>

              <div className="cinfo">
                <h5>Email Us At</h5>
                <p>
                  contact@XevenSolutionsite.com
                  <br />
                  info@XevenSolutionsite.com
                </p>
              </div>

              <div className="cinfo">
                <h5>Call Us At</h5>
                <p>
                  Phone: (+63) 555 1212
                  <br />
                  Mobile: (+63) 555 0100
                  <br />
                  Fax: (+63) 555 0101
                </p>
              </div>

              <ul className="contact-social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
