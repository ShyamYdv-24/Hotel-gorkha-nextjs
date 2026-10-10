import Image from "next/image";
import { PROVIDER_CREDITS } from "../data/images";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Image
            src="/logo.png"
            alt="Hotel Gorkha logo"
            width={56}
            height={56}
            className="site-footer__logo"
          />
          <div>
            <p className="site-footer__name">Hotel Gorkha</p>
            <p className="site-footer__tag">
              Comfort and simple hospitality.
            </p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="site-footer__links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} Hotel Gorkha. All rights reserved.</p>
        <p>
          Demo imagery via{" "}
          {PROVIDER_CREDITS.map((credit, index) => (
            <span key={credit.label}>
              <a href={credit.url} target="_blank" rel="noreferrer noopener">
                {credit.label}
              </a>
              {index < PROVIDER_CREDITS.length - 1 ? " & " : ""}
            </span>
          ))}{" "}
          — illustrative only, not actual hotel photos.
        </p>
      </div>
    </footer>
  );
}
