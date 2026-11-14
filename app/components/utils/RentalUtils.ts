
import { Rental } from "@/app/data/Rental";

// Mengubah nama kategori menjadi slug yang aman.
export function toCategorySlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Membuat daftar kategori unik dari data rental.
export const rentalCategories = [
  ...new Map(
    Rental.map((item) => [
      toCategorySlug(item.category),
      {
        name: item.category,
        slug: toCategorySlug(item.category),
      },
    ])
  ).values(),
];

// Membuat CSS filter berdasarkan kategori yang tersedia.
export function createRentalFilterStyles(): string {
  return rentalCategories
    .map(
      ({ slug }) => `
        .rental-filter:has(
          #rental-category option:checked[value="${slug}"]
        )
        ~ #rental-grid
        [data-category]:not([data-category="${slug}"]) {
          display: none;
        }
      `
    )
    .join("\n");
}
