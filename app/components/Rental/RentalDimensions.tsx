
import Image from "next/image";
import type { RentalItem } from "@/app/data/Rental";

type Props = {
  item: RentalItem;
};

export default function RentalDimensions({ item }: Props) {
  const dimensions = item.dimensions;

  if (
    !dimensions ||
    (!dimensions.image && dimensions.dimensions.length === 0)
  ) {
    return null;
  }

  return (
    <section aria-labelledby="rental-dimensions-heading" id="rental-size">
      <h2
        id="rental-dimensions-heading"
        className="text-xl font-bold text-neutral-900"
      >
        Ukuran Produk
      </h2>

      {dimensions.image && (
        <div className="relative mt-4 aspect-4/3 w-full overflow-hidden rounded-xl bg-neutral-100">
          <Image
            src={dimensions.image}
            alt={dimensions.alt ?? `Ukuran ${item.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 700px"
            className="object-contain"
          />
        </div>
      )}

      {dimensions.dimensions.length > 0 && (
        <dl className="mt-5 divide-y divide-neutral-200">
          {dimensions.dimensions.map((dimension) => (
            <div
              key={dimension.label}
              className="flex justify-between gap-4 py-3 text-sm sm:text-base"
            >
              <dt className="font-medium text-neutral-700">
                {dimension.label}
              </dt>

              <dd className="text-right text-neutral-900">
                {dimension.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
