export default function Contact() {
  return (
    <section id="contact">
      <h2>Location &amp; Contact</h2>

      <div className="contact__grid">
        <div className="contact__info">
          <h3>Hotel Gorkha</h3>
          <p>Dharan, Koshi Province, Nepal</p>
          <p>Phone: +977-25-XXXXXX</p>
          <p>Email: hotelgorkha@example.com</p>
          <p className="contact__note">
            Placeholder details carried over from the original site — not yet
            verified. Please treat as examples only.
          </p>
        </div>

        <div className="contact__map">
          <h3>Find Us</h3>
          <div className="contact__map-placeholder">
            Map will be displayed here.
          </div>
        </div>
      </div>
    </section>
  );
}
