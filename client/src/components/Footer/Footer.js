import githubIcon from "../../assets/image/github_icon.png";
import instagramIcon from "../../assets/image/instagram_icon.png";
import linkedInIcon from "../../assets/image/linkedIn_icon.png";
import "./Footer.scss";

function Footer() {

  const linkHandler = (url) => {
    window.open(url);
  };

  return (
    <div className="footer">
      <div className="footer__position">
        <h2 className="footer__header">TabTabTab is Powered by Chanho Kim</h2>
        <div className="footer__chanho-contacts">
          <h3 className="footer__name">Chanho Kim</h3>
          <img
            className="footer__icons"
            src={linkedInIcon}
            alt="Chanho's linked in page"
            onClick={()=>{linkHandler('https://www.linkedin.com/in/chanho-chris-kim/')}}
          ></img>
          <img
            className="footer__icons"
            src={githubIcon}
            alt="Chanho's github page"
            onClick={()=>{linkHandler('https://github.com/chanho-chris-kim')}}
          ></img>
          <img
            className="footer__icons"
            src={instagramIcon}
            alt="Chanho's instagram page"
            onClick={()=>{linkHandler('https://www.instagram.com/chanho.chris.kim/')}}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
