import SmartImage from "./SmartImage";
import { IMAGES } from "../data/images";

const FEATURES = [
  "Comfortable Stay",
  "Friendly Hospitality",
  "Convenient Location",
];

export default function About() {
  return (
    <section id="about">
      <div className="about__grid">
        <div className="about__media">
          <div className="about__photo">
            <SmartImage
              src={IMAGES.about.src}
              alt={IMAGES.about.alt}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              fallbackLabel="HOTEL PHOTO"
            />
          </div>
          <div className="about__caption">
            <strong>HOTEL GORKHA</strong>
            <span>Dharan, Nepal</span>
          </div>
        </div>

        <div className="about__content">
          <p className="about__label">ABOUT OUR HOTEL</p>
          <h2>About Hotel Gorkha</h2>
          <h3>A Comfortable Stay in Dharan</h3>
          <p>
            Welcome to Hotel Gorkha, a welcoming place to stay in Dharan, Nepal.
          </p>
          <p>
            Enjoy a pleasant environment, comfortable accommodation, and
            friendly hospitality during your stay.
          </p>

          <div className="about__features">
            {FEATURES.map((feature) => (
              <div className="about__feature" key={feature}>
                <span aria-hidden="true">&check;</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>

          <a href="#rooms" className="about__button">
            Explore Our Rooms
          </a>
        </div>
      </div>
    </section>
  );
}
