import logo from "../../assets/logo/logo.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__wrapper">
          <div className="site-footer__start">
            <a className="site-footer__link-logo" href="/">
              <img src={logo} alt="Prime car" />
            </a>
          </div>
          <div className="site-footer__center">
            <ul className="site-footer__list">
              <li className="site-footer__item">
                <h4 className="site-footer__title">Where are we</h4>
                <a href="#l" className="site-footer__link">
                  Georgia
                </a>
                <a href="#l" className="site-footer__link">
                  Texas
                </a>
                <a href="#l" className="site-footer__link">
                  California
                </a>
                <a href="#l" className="site-footer__link">
                  Virginia
                </a>
                <a href="#l" className="site-footer__link">
                  Colorado
                </a>
                <a href="#l" className="site-footer__link">
                  Pennsylvania
                </a>
                <a href="#l" className="site-footer__link">
                  Massachusetts
                </a>
              </li>
              <li className="site-footer__item">
                <h4 className="site-footer__title">Quick links</h4>
                <a href="#l" className="site-footer__link">
                  About Us
                </a>
                <a href="#l" className="site-footer__link">
                  Our Services
                </a>
                <a href="#l" className="site-footer__link">
                  About Us
                </a>
                <a href="#l" className="site-footer__link">
                  Contact Us
                </a>
              </li>
              <li className="site-footer__item">
                <h4 className="site-footer__title">Email Us</h4>
                <a href="#l" className="site-footer__link">
                  contact@primecar.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer__texts d-flex justify-content-between mt-5">
          <div className="d-flex">
            <p className="site-footer__text me-3">Privacy policy</p>
            <p className="site-footer__text">Term and conditions</p>
          </div>
          <h5 className="site-footer__subtitle">
            Copyright © 2022 Prime Car. All Rights Reserved
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
