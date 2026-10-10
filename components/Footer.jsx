import Image from "next/image";
import { PROVIDER_CREDITS } from "../data/images";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#services", label: "Services" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const CONTACT_DETAILS = [
  "Dharan, Koshi Province, Nepal",
  "Phone: +977-25-XXXXXX",
  "Email: hotelgorkha@example.com",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
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

      <nav className="site-footer__links" aria-label="Footer">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="site-footer__contact">
        {CONTACT_DETAILS.map((detail) => (
          <p key={detail}>{detail}</p>
        ))}
        <p className="site-footer__note">
          Placeholder details carried over from the original site — not yet
          verified. Please treat as examples only.
        </p>
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

      <div className="site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} Hotel Gorkha. All rights reserved.</p>
        <p>Designed with Next.js</p>
      </div>
    </footer>
  );
}