import "./header.scss";
import logo from "../../assets/logo/logo.svg";
import path from "../../assets/logo/path.svg"

const Header = () => {
  return (
    <div className="backround">
      <header className="site-header">
        <div className="container">
          <div className="site-header__wrapper">
            <div className="site-header__start">
              <a className="site-header__logo--link" href="/">
                <img src={logo} alt="Primere car" width={190} height={38} />
              </a>
            </div>
            <div className="site-header__center">
              <nav className="site-header__nav">
                <ul className="site-header__nav--list">
                  <li className="site-header__nav--item">
                    <a className="site-header__nav--link" href="#l">
                      Home
                    </a>
                  </li>
                  <li className="site-header__nav--item">
                    <a className="site-header__nav--link" href="#l">
                      About
                    </a>
                  </li>
                  <li className="site-header__nav--item">
                    <a className="site-header__nav--link" href="#l">
                      Cars
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="site-header__end">
              <button className="site-header__end--button">Contact Us</button>
            </div>
          </div>
        </div>
      </header>

      <section className="economy-section">
        <div className="container">
          <div className="economy-section__wrapper">
            <h1 className="economy-section__title">More economy, same speed</h1>
            <p className="economy-section__text">
              The most beloved cars of the moment for those who want to ride in
              style without spending too much
            </p>
            <button className="economy-section__btn">Discover
            <img src={path} alt="Path" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
