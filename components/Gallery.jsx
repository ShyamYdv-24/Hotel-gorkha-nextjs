import SmartImage from "./SmartImage";
import { DEMO_GALLERY } from "../data/gallery";
import { IMAGES } from "../data/images";

export default function Gallery() {
  return (
    <section id="gallery">
      <h2>Gallery</h2>

      <div className="gallery__grid">
        {DEMO_GALLERY.map((item) => {
          const image = IMAGES[item.imageKey];
          return (
            <div className="gallery__card" key={item.title}>
              <div className="gallery__media">
                <SmartImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 360px"
                  fallbackLabel="Image"
                />
              </div>
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
