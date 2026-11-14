import { RentalProduk } from "./RentalProduk";
import { RentalAdvantage } from "./RentalAdvantage";
import { RentalSize } from "./RentalSize";

export const Rental = RentalProduk.map((produk) => {
  const advantage = RentalAdvantage.find(
    (item) => item.slug === produk.slug
  );

  if (!advantage) {
    throw new Error(
      `Data keunggulan tidak ditemukan untuk produk: ${produk.slug}`
    );
  }

  return {
    ...produk,
    advantages: advantage,
    dimensions:
      RentalSize.find(
        (item) => item.slug === produk.slug
      ) ?? null,
  };
});

export type RentalItem = (typeof Rental)[number];