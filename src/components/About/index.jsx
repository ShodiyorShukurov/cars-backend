import "./about.scss";
import car from "../../assets/about.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

AOS.init();

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-section__title">About Us</h2>
        <div className="about-section__wrapper" data-aos="fade-up">
          <div className="about-section__start">
            <p className="about-section__text">
              We pride ourselves at being able to get our customer into the car
              that they want, and more importantly, at they price they are
              looking for.
            </p>

            <p className="about-section__text">
              We maintain outstanding customer service by listening to our
              customers and making sure that we meet their needs. Even if you
              don't buy from us, we will offer free advice on whe to look for
              when buying a used car or truck.
            </p>
            <p className="about-section__text">
              Our philosophy is to accomodate you, the customer, with
              outstanding service while providing you the highest quality
              automobile needs at wholesale prices. We have a wide selection of
              vehicles and the expertise to deal with what you are looking for.
            </p>
          </div>
          <div className="about-section__end">
            <img src={car} alt="About" width={500} height={500} />
          </div>
        </div>
      </div>
      <div className="about-section__card">
        <ul className="about-section__card--list">
          <li className="about-section__card--item">
            <h4 className="about-section__card--num">
              <CountUp end={396} /> mi
            </h4>
            <p className="about-section__card--text">Range (EPA est.)</p>
          </li>
          <li className="about-section__card--item">
            <h4 className="about-section__card--num">
              <CountUp end={1.99} /> s
            </h4>
            <p className="about-section__card--text"><CountUp end={0} />-<CountUp end={60}/> mph*</p>
          </li>
          <li className="about-section__card--item">
            <h4 className="about-section__card--num"><CountUp end={210} /> mph</h4>
            <p className="about-section__card--text">Top Speed*</p>
          </li>
          <li className="about-section__card--item">
            <h4 className="about-section__card--num">1.020 hp</h4>
            <p className="about-section__card--text">Peak Power</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
