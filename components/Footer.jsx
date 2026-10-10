import Image from "next/image";
import { PROVIDER_CREDITS } from "../data/images";

const EXPLORE_LINKS = [
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#menu", label: "Menu" },
];

const CONTACT_ITEMS = [
  "Dharan, Koshi Province, Nepal",
  "Phone: +977-25-XXXXXX",
  "Email: hotelgorkha@example.com",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__col site-footer__col--brand">
            <div className="site-footer__brand-block">
              <Image
                src="/logo.png"
                alt="Hotel Gorkha logo"
                width={56}
                height={56}
                className="site-footer__logo"
              />
              <h3>HOTEL GORKHA</h3>
            </div>
            <p className="site-footer__intro">
              Comfort, hospitality and a pleasant stay in Dharan.
            </p>
          </div>

          <div className="site-footer__col">
            <h4 className="site-footer__heading">Explore</h4>
            <nav className="site-footer__nav" aria-label="Footer navigation">
              {EXPLORE_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="site-footer__col">
            <h4 className="site-footer__heading">Contact</h4>
            <div className="site-footer__contact-block">
              {CONTACT_ITEMS.map((item) => (
                <p key={item}>{item}</p>
              ))}
              <p className="site-footer__note">
                Placeholder details carried over from the original site — not yet
                verified. Please treat as examples only.
              </p>
            </div>
          </div>
        </div>

        <p className="site-footer__credit">
          Illustrative imagery via{" "}
          {PROVIDER_CREDITS.map((credit, index) => (
            <span key={credit.label}>
              <a href={credit.url} target="_blank" rel="noreferrer noopener">
                {credit.label}
              </a>
              {index < PROVIDER_CREDITS.length - 1 ? " & " : ""}
            </span>
          ))}
          . Not actual photographs of the hotel.
        </p>

        <div className="site-footer__divider" />
        <div className="site-footer__bottom">
          <p>&copy; {year} Hotel Gorkha. All rights reserved.</p>
          <p>Designed with Next.js</p>
        </div>
      </div>
    </footer>
  );
}