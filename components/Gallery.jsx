import SmartImage from "./SmartImage";
import { DEMO_GALLERY } from "../data/gallery";
import { IMAGES } from "../data/images";

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="section-head">
        <p className="eyebrow">Take a look</p>
        <h2>Gallery</h2>
        <p className="section-sub">
          Illustrative images — not actual photographs of the hotel.
        </p>
      </div>

      <div className="gallery__grid">
        {DEMO_GALLERY.map((item) => {
          const image = IMAGES[item.imageKey];
          return (
            <figure
              className={`gallery__item gallery__item--${item.span}`}
              key={item.imageKey}
            >
              <SmartImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                fallbackLabel="Photo unavailable"
              />
            </figure>
          );
        })}
      </div>
    </section>
  );
}
