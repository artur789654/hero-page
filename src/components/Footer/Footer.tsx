import "./Footer.css";
import logo from "../../assets/images/Logologo.png"
const Footer: React.FC = () => {
  return (
    <footer className="footer-wrap">
      <div className="footer-content container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Example. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
