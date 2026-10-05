export default function About() {
  return (
    <section id="about">
      <div className="about-container">

        {/* Left: Hotel Image */}
        <div className="about-image">
          <div className="about-image-placeholder">
            <span>HOTEL PHOTO</span>
          </div>

          <div className="about-image-caption">
            <strong>HOTEL GORKHA</strong>
            <span>Dharan, Nepal</span>
          </div>
        </div>

        {/* Right: About Content */}
        <div className="about-content">

          <p className="about-label">ABOUT OUR HOTEL</p>

          <h2>About Hotel Gorkha</h2>

          <h3>A Comfortable Stay in Dharan</h3>

          <p>
            Welcome to Hotel Gorkha, a welcoming place to stay
            in Dharan, Nepal.
          </p>

          <p>
            Enjoy a pleasant environment, comfortable accommodation,
            and friendly hospitality during your stay.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <span>✓</span>
              <p>Comfortable Stay</p>
            </div>

            <div className="about-feature">
              <span>✓</span>
              <p>Friendly Hospitality</p>
            </div>

            <div className="about-feature">
              <span>✓</span>
              <p>Convenient Location</p>
            </div>

          </div>

          <a href="#rooms" className="about-button">
            Explore Our Rooms
          </a>

        </div>

      </div>
    </section>
  );
}