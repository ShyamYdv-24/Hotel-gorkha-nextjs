import SmartImage from "./SmartImage";
import { IMAGES } from "../data/images";

export default function Hero() {
  return (
    <section id="home">
      <SmartImage
        src={IMAGES.hero.src}
        alt={IMAGES.hero.alt}
        fill
        preload
        sizes="100vw"
        className="hero__bg"
        fallbackLabel=""
      />
      <h1>Welcome to Hotel Gorkha</h1>
      <p>Experience comfort and hospitality in Dharan.</p>
      <div className="hero__actions">
        <a className="btn btn-primary" href="#about">
          Explore Hotel
        </a>
        <a className="btn btn-outline" href="#contact">
          Contact Us
        </a>
      </div>
    </section>
  );
}
