import SmartImage from "./SmartImage";
import BookNowButton from "./BookNowButton";
import { DEMO_ROOMS } from "../data/rooms";
import { IMAGES } from "../data/images";

export default function Rooms() {
  return (
    <section id="rooms" className="section rooms">
      <div className="section-head">
        <p className="eyebrow">Accommodation</p>
        <h2>Rooms</h2>
        <p className="section-sub">
          A simple choice of rooms for your stay. Prices shown are demo values.
        </p>
      </div>

      <div className="rooms__grid">
        {DEMO_ROOMS.map((room) => {
          const image = IMAGES[room.imageKey];
          return (
            <article className="room-card" key={room.slug}>
              <div className="room-card__media">
                <SmartImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  fallbackLabel={room.name}
                />
              </div>
              <div className="room-card__body">
                <h3>{room.name}</h3>
                <p className="room-card__desc">{room.description}</p>
                <ul className="room-card__features">
                  {room.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="room-card__footer">
                  <p className="price">
                    <span className="price__amount">{room.priceLabel}</span>
                    <span className="price__unit">{room.priceUnit}</span>
                    <span className="price__badge">{room.priceNote}</span>
                  </p>
                  <BookNowButton room={room.slug} className="btn btn-primary">
                    Book Room
                  </BookNowButton>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
