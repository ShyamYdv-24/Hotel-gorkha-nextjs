import SmartImage from "./SmartImage";
import { IMAGES } from "../data/images";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about__grid">
        <div className="about__media">
          <SmartImage
            src={IMAGES.about.src}
            alt={IMAGES.about.alt}
            width={800}
            height={600}
            sizes="(max-width: 900px) 100vw, 45vw"
            className="about__img"
            fallbackLabel="Hotel interior"
          />
        </div>
        <div className="about__content">
          <p className="eyebrow">About our hotel</p>
          <h2>A comfortable stay, simply done</h2>
          <p>
            Hotel Gorkha is a welcoming place to stay, offering comfortable rooms
            and straightforward, friendly hospitality.
          </p>
          <p>
            Whether you are travelling for business or leisure, we aim to make
            your stay easy and relaxing.
          </p>
          <ul className="about__points">
            <li>Comfortable rooms</li>
            <li>Friendly hospitality</li>
            <li>Convenient location</li>
          </ul>
          <a className="btn btn-outline" href="#rooms">
            Explore our rooms
          </a>
        </div>
      </div>
    </section>
  );
}
