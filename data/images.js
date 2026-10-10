/**
 * DEMO IMAGE REGISTRY
 * ---------------------------------------------------------------------------
 * All remote images used across the site live here so they are easy to
 * replace. These are generic stock photos sourced from Pexels and Unsplash
 * and are ILLUSTRATIVE ONLY. They do NOT depict the actual Hotel Gorkha.
 *
 * Licensing: both the Pexels License and the Unsplash License allow free
 * commercial use and hotlinking of their CDNs; attribution is appreciated but
 * not required. Credit metadata is kept below for convenience.
 *
 * To swap an image: replace `src`, `alt`, `provider`, `sourceUrl` and `credit`.
 * Keep the object keys stable so components do not need changes.
 */

export const IMAGES = {
  hero: {
    src: "https://images.pexels.com/photos/14012107/pexels-photo-14012107.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Illustrative grand hotel entrance with a classical facade",
    provider: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/14012107/",
    credit: "Photo via Pexels",
  },
  about: {
    src: "https://images.unsplash.com/photo-1759038086403-c607d67bb245?auto=format&fit=crop&w=1600&q=80",
    alt: "Illustrative modern hotel lobby with curved wooden walls",
    provider: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/vEO-8ck28fY",
    credit: "Photo by Neon Wang on Unsplash",
  },
  roomStandard: {
    src: "https://images.pexels.com/photos/6186819/pexels-photo-6186819.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Illustrative bright, minimalist hotel bedroom",
    provider: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/6186819/",
    credit: "Photo via Pexels",
  },
  roomDeluxe: {
    src: "https://images.pexels.com/photos/29000312/pexels-photo-29000312.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Illustrative spacious hotel room with a canopy bed",
    provider: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/29000312/",
    credit: "Photo via Pexels",
  },
  roomFamily: {
    src: "https://images.pexels.com/photos/34909685/pexels-photo-34909685.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Illustrative hotel room with twin beds and a balcony view",
    provider: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/34909685/",
    credit: "Photo via Pexels",
  },
  menu: {
    src: "https://images.pexels.com/photos/19842823/pexels-photo-19842823.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Illustrative top-down view of dishes on a dining table",
    provider: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/19842823/",
    credit: "Photo via Pexels",
  },
  galleryExterior: {
    src: "https://images.pexels.com/photos/28999489/pexels-photo-28999489.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Illustrative modern hotel exterior surrounded by greenery",
    provider: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/28999489/",
    credit: "Photo via Pexels",
  },
  galleryLobby: {
    src: "https://images.unsplash.com/photo-1723516908282-b3c795e9416a?auto=format&fit=crop&w=1200&q=80",
    alt: "Illustrative hotel lobby with a staircase",
    provider: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/mPuv7limVSM",
    credit: "Photo by Haripriya K on Unsplash",
  },
  galleryDining: {
    src: "https://images.pexels.com/photos/10187175/pexels-photo-10187175.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Illustrative warm, cozy restaurant dining area",
    provider: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/10187175/",
    credit: "Photo via Pexels",
  },
  galleryRoom: {
    src: "https://images.pexels.com/photos/6899352/pexels-photo-6899352.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Illustrative minimalist hotel bedroom near a window",
    provider: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/6899352/",
    credit: "Photo via Pexels",
  },
  galleryInterior: {
    src: "https://images.unsplash.com/photo-1692153142524-60285a93c249?auto=format&fit=crop&w=1200&q=80",
    alt: "Illustrative hotel interior with a checkered floor and bar",
    provider: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/1CcryZiF2PA",
    credit: "Photo on Unsplash",
  },
  galleryView: {
    src: "https://images.unsplash.com/photo-1742844552264-71e01c8dd7c0?auto=format&fit=crop&w=1200&q=80",
    alt: "Illustrative elegant hotel lounge interior",
    provider: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/FKRxSxVUtM8",
    credit: "Photo on Unsplash",
  },
};

/** Provider-level credits for the subtle footer note. */
export const PROVIDER_CREDITS = [
  { label: "Pexels", url: "https://www.pexels.com" },
  { label: "Unsplash", url: "https://unsplash.com" },
];
