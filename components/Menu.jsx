import SmartImage from "./SmartImage";
import { DEMO_MENU } from "../data/menu";
import { IMAGES } from "../data/images";

export default function Menu() {
  return (
    <section id="menu" className="section menu">
      <div className="section-head">
        <p className="eyebrow">Food &amp; drink</p>
        <h2>Food Menu</h2>
        <p className="section-sub">
          Sample dishes with illustrative prices — example content only.
        </p>
      </div>

      <div className="menu__layout">
        <div className="menu__media">
          <SmartImage
            src={IMAGES.menu.src}
            alt={IMAGES.menu.alt}
            width={760}
            height={480}
            sizes="(max-width: 900px) 100vw, 40vw"
            className="menu__img"
            fallbackLabel="Food"
          />
        </div>

        <div className="menu__categories">
          {DEMO_MENU.map((category) => (
            <div className="menu__category" key={category.category}>
              <h3>{category.category}</h3>
              <ul>
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
            Sample menu shown for demonstration — not the hotel&rsquo;s verified
            menu.
          </p>
        </div>
      </div>
    </section>
  );
}
