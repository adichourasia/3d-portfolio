import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const contactLinks = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "adityachourasia716@gmail.com",
      url: "mailto:adityachourasia716@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 8962155878",
      url: "tel:+918962155878",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "aditya-chourasia-5a4893327",
      url: "https://www.linkedin.com/in/aditya-chourasia-5a4893327",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "adichourasia",
      url: "https://github.com/adichourasia",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      value: "_aditya_chourasia_",
      url: "https://www.instagram.com/_aditya_chourasia_/",
    },
  ];

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h2>
          Let's <span>Connect</span>
        </h2>
        <p className="contact-subheading">
          Open for internships, collaboration and freelance works.
        </p>

        <div className="connect-grid">
          {contactLinks.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="connect-card"
              key={index}
              data-cursor="disable"
            >
              <div className="connect-icon-wrapper">{item.icon}</div>
              <div className="connect-info">
                <span className="connect-label">{item.label}</span>
                <span className="connect-value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="contact-footer">
          <h3>
            Designed and Developed by <span>Aditya Chourasia</span>
          </h3>
          <h5>
            <MdCopyright /> 2026
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
