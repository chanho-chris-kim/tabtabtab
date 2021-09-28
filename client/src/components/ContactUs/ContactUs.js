import "./ContactUs.scss";
import githubIcon from "../../assets/image/github_icon.png";
import instagramIcon from "../../assets/image/instagram_icon.png";
import linkedInIcon from "../../assets/image/linkedIn_icon.png";

function ContactUs() {
  const linkHandler = (url) => {
    window.open(url);
  };

  return (
    <div className="contact-us__background">
      <div className="contact-us">
        <h1 className="contact-us__header">Chanho Kim </h1>
        <h2 className="contact-us__sub-header">Full-Stack Web
          Developer</h2>
        <div className="contact-us__icons">
          <img
            className="contact-us__icon"
            src={linkedInIcon}
            alt="Chanho's linked in page"
            onClick={() => {
              linkHandler("https://www.linkedin.com/in/chanho-chris-kim/");
            }}
          />
          <img
            className="contact-us__icon"
            src={githubIcon}
            alt="Chanho's github page"
            onClick={() => {
              linkHandler("https://github.com/chanho-chris-kim");
            }}
          />
          <img
            className="contact-us__icon"
            src={instagramIcon}
            alt="Chanho's instagram page"
            onClick={() => {
              linkHandler("https://www.instagram.com/chanho.chris.kim/");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
