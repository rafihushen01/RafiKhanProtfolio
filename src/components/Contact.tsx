import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { personalInfo, socialLinks } from "../data/portfolioData";

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${personalInfo.email}`} data-cursor="disable">
                {personalInfo.email}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href={`tel:${personalInfo.phoneRaw}`} data-cursor="disable">
                {personalInfo.phoneDisplay}
              </a>
            </p>
            <h4>Location</h4>
            <p>{personalInfo.location}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {socialLinks.map((item) => (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
                key={item.name}
              >
                {item.name} <MdArrowOutward />
              </a>
            ))}
          </div>
          <div >
            <h2 >
              Designed and Developed <br /> by <span onClick={() => window.location.href = "https://mdrafikhan.vercel.app"}
 >{personalInfo.fullName}</span>
            </h2>
            <h5>
              <MdCopyright /> {year}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
