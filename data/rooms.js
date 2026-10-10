/**
 * DEMO ROOM DATA — ILLUSTRATIVE ONLY
 * ---------------------------------------------------------------------------
 * Room names and descriptions are restored from the original website
 * (base commit d594781). The prices below are illustrative demo values and
 * are NOT verified hotel rates. Replace them with real rooms and rates when
 * available. `imageKey` refers to a key in data/images.js.
 */

export const DEMO_ROOMS = [
  {
    slug: "standard",
    name: "Standard Room",
    description: "A comfortable room for a relaxing stay.",
    priceLabel: "NPR 3,500",
    priceUnit: "per night",
    priceNote: "Demo price",
    imageKey: "roomStandard",
  },
  {
    slug: "deluxe",
    name: "Deluxe Room",
    description: "A spacious room designed for extra comfort.",
    priceLabel: "NPR 5,500",
    priceUnit: "per night",
    priceNote: "Demo price",
    imageKey: "roomDeluxe",
  },
  {
    slug: "family",
    name: "Family Room",
    description: "A convenient room option for families and groups.",
    priceLabel: "NPR 7,500",
    priceUnit: "per night",
    priceNote: "Demo price",
    imageKey: "roomFamily",
  },
];

/** Room options used by the booking form's preference selector. */
export const ROOM_OPTIONS = DEMO_ROOMS.map((room) => ({
  slug: room.slug,
  name: room.name,
}));
