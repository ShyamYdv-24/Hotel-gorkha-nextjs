import SmartImage from "./SmartImage";
import BookNowButton from "./BookNowButton";
import { DEMO_ROOMS } from "../data/rooms";
import { IMAGES } from "../data/images";

export default function Rooms() {
  return (
    <section id="rooms">
      <h2>Our Rooms</h2>

      <div className="rooms__grid">
        {DEMO_ROOMS.map((room) => {
          const image = IMAGES[room.imageKey];
          return (
            <div className="room-card" key={room.slug}>
              <div className="room-card__media">
                <SmartImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 360px"
                  fallbackLabel="Room Image"
                />
              </div>
              <div className="room-card__body">
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <p className="room-card__price">
                  {room.priceLabel} {room.priceUnit}
                  <small>{room.priceNote}</small>
                </p>
                <BookNowButton room={room.slug} className="btn btn-primary">
                  Book Room
                </BookNowButton>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
