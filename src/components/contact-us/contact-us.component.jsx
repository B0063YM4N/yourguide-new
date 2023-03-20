import "./contact-us.styles.scss";

export const ContactUs = () => {
  return (
    <section id="contact-us">
      <h1>CONTACT US</h1>
      <div className="contact-container">
        <div className="contact-phone">
          <i class="fa-sharp fa-solid fa-phone-volume"></i>
          <h4>BY PHONE</h4>
          <h5>TBILISI</h5>
          <h6>+995-555-55-97-39</h6>
        </div>
        <div className="contact-instagram">
        <i className="fa-brands fa-instagram"></i>
        <h4>INSTAGRAM</h4>
        <div className="contact-link-container"><a className="contact-link" href="https://www.instagram.com/yourguideingeorgia_official/">START CHAT</a></div>
        </div>
        <div className="contact-facebok">
        <i className="fa-brands fa-facebook"></i>
        <h4>FACEBOOK</h4>
        <div className="contact-link-container"><a className="contact-link" href="https://www.messenger.com/t/1756413821292748">START CHAT</a></div>
        </div>
      </div>
    </section>
  );
};
