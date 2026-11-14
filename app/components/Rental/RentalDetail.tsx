
import type { RentalItem } from "@/app/data/Rental";
import RentalProductName from "@/app/components/Rental/RentalProdukName";
import RentalAdvantages from "@/app/components/Rental/RentalAdvantages";
import RentalDimensions from "@/app/components/Rental/RentalDimensions";
import RentalNavDetail from "./RentalNavDetail";

type Props = {
  item: RentalItem;
};

export default function RentalDetail({ item }: Props) {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <RentalNavDetail />

      <article className="mt-8 space-y-12 sm:space-y-16">
        <RentalProductName item={item} />

        <RentalAdvantages item={item} />

        <RentalDimensions item={item} />
      </article>
    </main>
  );
}
