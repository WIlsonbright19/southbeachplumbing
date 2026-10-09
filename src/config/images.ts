/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ImageSlot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const IMAGES: {
  heroImage: ImageSlot;
  areaImage: ImageSlot;
} = {
  heroImage: {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1800&h=1100&q=80",
    alt: "Professional plumbing and air conditioning technician at work",
    width: 1800,
    height: 1100,
  },
  areaImage: {
    src: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1800&h=1100&q=80",
    alt: "Miami neighborhood residential area service coverage",
    width: 1800,
    height: 1100,
  },
};
