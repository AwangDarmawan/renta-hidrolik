
import Image from "next/image";
import type { RentalItem } from "@/app/data/Rental";

type Props = {
  item: RentalItem;
};

export default function RentalAdvantages({ item }: Props) {
  const advantage = item.advantages;

  return (
    <section
      id="rental-advantage"
      aria-labelledby="rental-advantages-heading"
      className="scroll-mt-28 sm:scroll-mt-32"
    >
      {/* Satu Card Keunggulan */}
      <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md sm:rounded-2xl">

        {/* Header Card */}
        <header className="border-b border-neutral-100 p-4 sm:p-6 lg:px-8 lg:py-6">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#D4A017] sm:text-xs">
            Keunggulan Produk Kami
          </p>

          <h2
            id="rental-advantages-heading"
            className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl lg:text-3xl"
          >
            Keunggulan {item.name}
          </h2>
        </header>

        {/* Konten Card */}
        <div className="grid grid-cols-1 items-center gap-6 p-4 sm:gap-8 sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">

          {/* Gambar Keunggulan */}
          <figure>
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-lg border border-neutral-100 bg-neutral-50 sm:rounded-xl">
              <Image
                src={advantage.image}
                alt={advantage.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-contain p-4 transition-transform duration-500 ease-out motion-safe:group-hover:scale-105 sm:p-5"
              />
            </div>
          </figure>

          {/* Daftar Keunggulan */}
          <section
            aria-labelledby="rental-advantage-list-heading"
            className="flex flex-col justify-center"
          >
            <header className="mb-3 flex items-center gap-3 sm:mb-4">
              <span
                aria-hidden="true"
                className="h-7 w-1 shrink-0 rounded-full bg-[#D4A017]"
              />

              <h3
                id="rental-advantage-list-heading"
                className="text-lg font-bold text-neutral-900 sm:text-xl lg:text-2xl"
              >
                Keunggulan Produk
              </h3>
            </header>

            <ul className="space-y-3 sm:space-y-4">
              {advantage.items.map((point, index) => (
                <li
                  key={`${item.slug}-advantage-${index}`}
                  className="flex items-start gap-3 rounded-lg border border-neutral-100 bg-neutral-50/70 p-3 transition-colors duration-200 hover:border-amber-200 hover:bg-amber-50/60 sm:gap-4 sm:p-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-[#B8860B] sm:size-7"
                  >
                    ✓
                  </span>

                  <span className="min-w-0 text-sm font-medium leading-relaxed text-neutral-700 sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </section>
  );
}
