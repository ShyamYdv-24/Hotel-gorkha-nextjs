"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\-\s\d]{7,}$/;

function todayISO() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function validate(values) {
  const errors = {};
  const today = todayISO();

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  const contact = values.contact.trim();
  if (!contact) {
    errors.contact = "Please enter a phone number or email.";
  } else if (!EMAIL_RE.test(contact) && !PHONE_RE.test(contact)) {
    errors.contact = "Enter a valid phone number or email address.";
  }

  if (!values.checkIn) {
    errors.checkIn = "Please choose a check-in date.";
  } else if (values.checkIn < today) {
    errors.checkIn = "Check-in cannot be in the past.";
  }

  if (!values.checkOut) {
    errors.checkOut = "Please choose a check-out date.";
  } else if (values.checkIn && values.checkOut <= values.checkIn) {
    errors.checkOut = "Check-out must be after check-in.";
  }

  if (!values.room) {
    errors.room = "Please select a room.";
  }

  return errors;
}

export default function BookingForm({ rooms, selectedRoom, onClose }) {
  const [values, setValues] = useState({
    name: "",
    contact: "",
    checkIn: "",
    checkOut: "",
    room: selectedRoom || "",
    guests: "2",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const timerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const update = (field) => (event) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (status !== "idle") return;

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = Object.keys(nextErrors)[0];
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // Demo only: simulate a short local "processing" state. No data leaves the
    // browser and nothing is stored.
    setStatus("submitting");
    timerRef.current = setTimeout(() => setStatus("submitted"), 700);
  };

  if (status === "submitted") {
    return (
      <div className="booking-success" role="status" aria-live="polite">
        <h3>Demo request received</h3>
        <p>
          This is a demonstration only. Your details were <strong>not sent</strong>{" "}
          to Hotel Gorkha, and <strong>no reservation has been made</strong>. In a
          real site this would be reviewed and confirmed by the hotel.
        </p>
        <div className="booking-success__actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setStatus("idle");
              setValues({
                name: "",
                contact: "",
                checkIn: "",
                checkOut: "",
                room: selectedRoom || "",
                guests: "2",
                message: "",
              });
              setErrors({});
            }}
          >
            Make another request
          </button>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  const fieldError = (field) =>
    errors[field] ? (
      <span className="field-error" id={`${field}-error`} role="alert">
        {errors[field]}
      </span>
    ) : null;

  return (
    <form ref={formRef} className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="bf-name">Full name</label>
        <input
          id="bf-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={update("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
        {fieldError("name")}
      </div>

      <div className="field">
        <label htmlFor="bf-contact">Phone or email</label>
        <input
          id="bf-contact"
          name="contact"
          type="text"
          autoComplete="tel"
          value={values.contact}
          onChange={update("contact")}
          aria-invalid={Boolean(errors.contact)}
          aria-describedby={errors.contact ? "contact-error" : undefined}
          required
        />
        {fieldError("contact")}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="bf-checkin">Check-in</label>
          <input
            id="bf-checkin"
            name="checkIn"
            type="date"
            min={todayISO()}
            value={values.checkIn}
            onChange={update("checkIn")}
            aria-invalid={Boolean(errors.checkIn)}
            aria-describedby={errors.checkIn ? "checkIn-error" : undefined}
            required
          />
          {fieldError("checkIn")}
        </div>

        <div className="field">
          <label htmlFor="bf-checkout">Check-out</label>
          <input
            id="bf-checkout"
            name="checkOut"
            type="date"
            min={values.checkIn || todayISO()}
            value={values.checkOut}
            onChange={update("checkOut")}
            aria-invalid={Boolean(errors.checkOut)}
            aria-describedby={errors.checkOut ? "checkOut-error" : undefined}
            required
          />
          {fieldError("checkOut")}
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="bf-room">Room preference</label>
          <select
            id="bf-room"
            name="room"
            value={values.room}
            onChange={update("room")}
            aria-invalid={Boolean(errors.room)}
            aria-describedby={errors.room ? "room-error" : undefined}
            required
          >
            <option value="">Select a room</option>
            {rooms.map((room) => (
              <option key={room.slug} value={room.slug}>
                {room.name}
              </option>
            ))}
          </select>
          {fieldError("room")}
        </div>

        <div className="field">
          <label htmlFor="bf-guests">Guests</label>
          <select
            id="bf-guests"
            name="guests"
            value={values.guests}
            onChange={update("guests")}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={String(n)}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="bf-message">
          Message <span className="field-optional">(optional)</span>
        </label>
        <textarea
          id="bf-message"
          name="message"
          rows={3}
          value={values.message}
          onChange={update("message")}
        />
      </div>

      <p className="booking-disclaimer">
        Demo form only — submitting does not send your details and does not create
        a booking.
      </p>

      <div className="booking-actions">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status !== "idle"}
        >
          {status === "submitting" ? "Sending request…" : "Submit request"}
        </button>
        <button type="button" className="btn btn-ghost" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
}
