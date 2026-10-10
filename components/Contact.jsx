const MAP = {
  embedSrc:
    "https://maps.google.com/maps?q=26.8174062,87.27726&z=16&hl=en&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=26.8174062,87.27726",
  title: "Map showing the location of Hotel Gorkha in Dharan, Nepal",
};

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
          <div className="contact__map-frame">
            <iframe
              src={MAP.embedSrc}
              title={MAP.title}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            className="contact__map-directions"
            href={MAP.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}