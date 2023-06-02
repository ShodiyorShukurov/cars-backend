import "./contact.scss";

const ContactUs = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container">
        <h1 className="contact-section__bg">contact us</h1>
          <div className="contact-section__wrapper">
            <div className="contact-section__start">
              <h2 className="contact-section__title">Contact us</h2>
              <p className="contact-section__text">
                To find out more information about cars and quotes, fill out the
                form on the side or contact us by phone.
              </p>
            </div>

            <div className="contact-section__end">
              <form>
                <div>
                  <input
                    className="contact-section__input"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />

                  <input
                    className="contact-section__input"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="contact-section__input-group">
                  <input
                    className="contact-section__input"
                    type="tel"
                    name="tel_number"
                    placeholder="Phone Number "
                  />
                  <select className="contact-section__input ">
                    <option>Country</option>
                    <option value="uzb">Uzbekistan</option>
                    <option value="rus">Russia</option>
                    <option value="en">Angliya</option>
                  </select>
                </div>
                <textarea
                  className="contact-section__textarea"
                  placeholder="Message"
                ></textarea>
                <button className="contact-section__btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
