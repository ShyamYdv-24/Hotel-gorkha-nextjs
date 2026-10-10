/**
 * DEMO ROOM DATA — ILLUSTRATIVE ONLY
 * ---------------------------------------------------------------------------
 * The room names, descriptions, features and prices below are placeholders.
 * They are NOT verified hotel offerings. "Standard", "Deluxe" and "Family"
 * are retained only as illustrative demo categories.
 *
 * Replace these values with the hotel's real rooms and rates when available.
 * `imageKey` refers to a key in data/images.js.
 */

export const DEMO_ROOMS = [
  {
    slug: "standard",
    name: "Standard Room",
    description:
      "A simple, comfortable room for a restful night's stay.",
    priceLabel: "NPR 3,500",
    priceUnit: "per night",
    priceNote: "Demo price",
    imageKey: "roomStandard",
    features: ["Comfortable bed", "Private bathroom", "Free Wi-Fi"],
  },
  {
    slug: "deluxe",
    name: "Deluxe Room",
    description:
      "A more spacious room with extra room to relax.",
    priceLabel: "NPR 5,500",
    priceUnit: "per night",
    priceNote: "Demo price",
    imageKey: "roomDeluxe",
    features: ["Extra space", "Seating area", "Private bathroom"],
  },
  {
    slug: "family",
    name: "Family Room",
    description:
      "A practical option for families and small groups.",
    priceLabel: "NPR 7,500",
    priceUnit: "per night",
    priceNote: "Demo price",
    imageKey: "roomFamily",
    features: ["Multiple beds", "Space for groups", "Private bathroom"],
  },
];

/** Room options used by the booking form's preference selector. */
export const ROOM_OPTIONS = DEMO_ROOMS.map((room) => ({
  slug: room.slug,
  name: room.name,
}));
