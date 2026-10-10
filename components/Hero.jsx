import SmartImage from "./SmartImage";
import BookNowButton from "./BookNowButton";
import { IMAGES } from "../data/images";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__media">
        <SmartImage
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          fill
          preload
          sizes="100vw"
          fallbackLabel="Hotel Gorkha"
        />
      </div>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__content">
        <p className="eyebrow eyebrow--light">Dharan, Nepal</p>
        <h1>Welcome to Hotel Gorkha</h1>
        <p className="hero__lead">
          A warm, comfortable place to stay with simple, friendly hospitality.
        </p>
        <div className="hero__actions">
          <BookNowButton className="btn btn-primary btn-lg">
            Book Your Stay
          </BookNowButton>
          <a className="btn btn-outline btn-lg" href="#rooms">
            View Rooms
          </a>
        </div>
      </div>
    </section>
  );
}
