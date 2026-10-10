"use client";

import { useBooking } from "./BookingProvider";

export default function BookNowButton({
  room = "",
  className = "btn btn-primary",
  children = "Book Now",
  onActivate,
}) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        openBooking(room);
        if (onActivate) onActivate();
      }}
    >
      {children}
    </button>
  );
}
