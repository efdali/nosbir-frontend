import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <img
            src="https://2code.info/demo/themes/Discy/Main/wp-content/themes/discy/images/logo-footer.png"
            alt="nosbir"
          />
          <span>
            Discy is a social questions & Answers Engine which will help you
            establis your community and connect with other people.
          </span>
        </div>
        <div className="footer-policy">
          <h6 className="footer-header">Legal Stuff</h6>
          <ul>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Cookie Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-help">
          <h6 className="footer-header">Help</h6>
          <ul>
            <li>
              <Link to="/">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
