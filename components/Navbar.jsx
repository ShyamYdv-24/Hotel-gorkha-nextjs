"use client";

import { useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  const close = () => {
    setOpen(false);
    if (toggleRef.current) toggleRef.current.focus();
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      close();
    }
  };

  return (
    <nav className="navbar" aria-label="Primary" onKeyDown={onKeyDown}>
      <a href="#home" className="navbar__brand" onClick={close}>
        <Image
          src="/logo.png"
          alt="Hotel Gorkha logo"
          width={40}
          height={40}
          className="navbar__logo"
        />
        <span className="navbar__title">HOTEL GORKHA</span>
      </a>

      <button
        ref={toggleRef}
        type="button"
        className="navbar__toggle"
        aria-expanded={open}
        aria-controls="navbar-links"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="navbar__toggle-bars" aria-hidden="true" />
      </button>

      <div
        id="navbar-links"
        className={`navbar__links${open ? " navbar__links--open" : ""}`}
      >
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
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