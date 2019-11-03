import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <img
            src={process.env.PUBLIC_URL + '/footer.png'}
            alt="nosbir"
            width="100"
            height="90"
          />
          <span>
            Nosbir gruplara katılıp kaliteli içerikler üretebileceğiniz veya
            araştırdığınız konu hakkında kaliteli içeriğe rahatlıkla
            ulaşabileceğiniz sosyal paylaşım dünyasıdır.
          </span>
        </div>
        <div className="terms">
          <div className="footer-policy f_left">
            <h6 className="footer-header">Yasal İşler</h6>
            <ul>
              <li>
                <Link to="/">Kullanım Şartları</Link>
              </li>
              <li>
                <Link to="/">Gizlilik Politikası</Link>
              </li>
              <li>
                <Link to="/">Çerez Politikası</Link>
              </li>
            </ul>
          </div>
          <div className="footer-help f_right">
            <h6 className="footer-header">Yardım</h6>
            <ul>
              <li>
                <Link to="/">Destek</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
