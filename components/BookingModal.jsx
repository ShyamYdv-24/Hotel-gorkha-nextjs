"use client";

import { useCallback, useEffect, useRef } from "react";
import BookingForm from "./BookingForm";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function BookingModal({ isOpen, onClose, selectedRoom, rooms }) {
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const nodes = Array.from(
        dialogRef.current.querySelectorAll(FOCUSABLE)
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);

      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    previouslyFocused.current = document.activeElement;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    const firstField = dialogRef.current?.querySelector(FOCUSABLE);
    firstField?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (previouslyFocused.current?.focus) {
        previouslyFocused.current.focus();
      }
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="booking-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
      >
        <button
          type="button"
          className="booking-close"
          onClick={onClose}
          aria-label="Close booking form"
        >
          &times;
        </button>
        <h2 id="booking-title">Request a Booking</h2>
        <p className="booking-intro">
          This is a demonstration form. No reservation is created and nothing is
          sent anywhere.
        </p>
        <BookingForm
          key={selectedRoom || "any"}
          rooms={rooms}
          selectedRoom={selectedRoom}
          onClose={onClose}
        />
      </div>
    </div>
  );
}
