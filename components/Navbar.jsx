import Image from "next/image";
import BookNowButton from "./BookNowButton";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#services", label: "Services" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary">
      <a href="#home" className="navbar__brand">
        <Image
          src="/logo.png"
          alt="Hotel Gorkha logo"
          width={40}
          height={40}
          className="navbar__logo"
        />
        <span className="navbar__title">HOTEL GORKHA</span>
      </a>

      <div className="navbar__links">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <BookNowButton className="btn btn-primary navbar__cta">
        Book Now
      </BookNowButton>
    </nav>
  );
}
