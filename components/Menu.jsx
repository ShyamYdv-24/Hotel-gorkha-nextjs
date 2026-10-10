import SmartImage from "./SmartImage";
import { DEMO_MENU } from "../data/menu";
import { IMAGES } from "../data/images";

export default function Menu() {
  return (
    <section id="menu">
      <h2>Food Menu</h2>

      <div className="menu__grid">
        <div className="menu__media">
          <SmartImage
            src={IMAGES.menu.src}
            alt={IMAGES.menu.alt}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            fallbackLabel="Food"
          />
        </div>

        <div className="menu__categories">
          {DEMO_MENU.map((category) => (
            <div className="menu__category" key={category.category}>
              <h3>{category.category}</h3>
              <ul className="menu__list">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <div className="menu__item">
                      <span className="menu__item-name">{item.name}</span>
                      <span className="menu__dots" aria-hidden="true" />
                      <span className="menu__item-price">{item.price}</span>
                    </div>
                    {item.description ? (
                      <p className="menu__item-desc">{item.description}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="menu__note">
            Illustrative sample menu only — not the hotel&rsquo;s verified menu.
          </p>
        </div>
      </div>
    </section>
  );
}
