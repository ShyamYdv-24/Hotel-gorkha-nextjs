"use client";

import Image from "next/image";
import { useState } from "react";
import BookNowButton from "./BookNowButton";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#home" className="brand" onClick={close}>
          <Image
            src="/logo.png"
            alt="Hotel Gorkha logo"
            width={44}
            height={44}
            className="brand__logo"
          />
          <span className="brand__name">Hotel Gorkha</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="visually-hidden">
            {open ? "Close navigation menu" : "Open navigation menu"}
          </span>
          <span className={`nav-toggle__bar${open ? " is-open" : ""}`} />
          <span className={`nav-toggle__bar${open ? " is-open" : ""}`} />
          <span className={`nav-toggle__bar${open ? " is-open" : ""}`} />
        </button>

        <nav
          id="primary-nav"
          className={`site-nav${open ? " is-open" : ""}`}
          aria-label="Primary"
        >
          <ul className="site-nav__list">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <BookNowButton
            className="btn btn-primary site-nav__cta"
            onActivate={close}
          >
            Book Now
          </BookNowButton>
        </nav>
      </div>
    </header>
  );
}
