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

      <p>Comfort, hospitality and a pleasant stay in Dharan.</p>

      <div className="site-footer__links">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <p>&copy; {new Date().getFullYear()} Hotel Gorkha. All rights reserved.</p>
      <p>Designed with Next.js</p>

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
    </footer>
  );
}
