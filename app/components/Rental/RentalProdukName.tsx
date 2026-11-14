
import Image from "next/image";
import type { RentalItem } from "@/app/data/Rental";

type Props = {
  item: RentalItem;
};

export default function RentalProductName({ item }: Props) {
  return (
    <section
      id="nama-rental"
      aria-labelledby="rental-product-heading"
      className="scroll-mt-28 sm:scroll-mt-32"
    >
      <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md sm:rounded-2xl">

        {/* Header Produk */}
        <header className="flex flex-col gap-4 border-b border-neutral-100 p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-6">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#D4A017] sm:text-xs">
              Informasi Produk Rental
            </p>

            <h1
              id="rental-product-heading"
              className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl lg:text-3xl"
            >
              {item.name}
            </h1>

            <p className="mt-2 text-sm text-neutral-800 italic sm:text-sm">
              Model : {" "}
              <span className="font-bold  text-neutral-800">
                {item.code}
              </span>
            </p>
          </div>

          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 sm:px-4 sm:py-2 sm:text-sm">
            <span
              aria-hidden="true"
              className="size-2 shrink-0 rounded-full bg-green-500"
            />
            {item.availability}
          </p>
        </header>

        {/* Konten Utama Produk */}
        <section
          aria-label={`Gambar dan deskripsi ${item.name}`}
          className="grid grid-cols-1 items-center gap-6 p-4 sm:gap-8 sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8"
        >
          {/* Gambar Produk */}
          <figure>
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-lg border border-neutral-100 bg-neutral-50 sm:rounded-xl">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 50vw"
                className="object-contain p-4 transition-transform duration-500 ease-out motion-safe:group-hover:scale-105 sm:p-5"
              />

              {item.badge && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-[#D4A017] px-3 py-1.5 text-[11px] font-bold text-white shadow-sm sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-xs">
                  {item.badge}
                </span>
              )}

              <span className="absolute bottom-3 right-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-medium text-neutral-600 shadow-sm sm:bottom-4 sm:right-4 sm:px-3 sm:py-1.5 sm:text-xs">
                Produk Rental
              </span>
            </div>
          </figure>

          {/* Deskripsi Produk */}
          <section
            aria-labelledby="rental-description-heading"
            className="flex flex-col justify-center"
          >
            <header className="mb-3 flex items-center gap-3 sm:mb-4">
              <span
                aria-hidden="true"
                className="h-7 w-1 shrink-0 rounded-full bg-[#D4A017]"
              />

              <h2
                id="rental-description-heading"
                className="text-lg font-bold text-neutral-900 sm:text-xl lg:text-2xl"
              >
                Deskripsi Produk
              </h2>
            </header>

            <p className="max-w-prose text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              {item.description}
            </p>
          </section>
        </section>
      </article>
    </section>
  );
}
