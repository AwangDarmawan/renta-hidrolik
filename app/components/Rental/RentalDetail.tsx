
import Image from "next/image";
import Link from "next/link";
import { Rental } from "@/app/data/Rental";

type Props = {
  item: (typeof Rental)[number];
};

const whatsappNumber = "6281234567890";

export default function RentalDetail({ item }: Props) {
  const message =
    `Halo IPL, saya ingin bertanya mengenai ${item.name} dengan model ${item.code}. Mohon informasi detail dan ketersediaannya.`;

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section
      aria-labelledby="detail-Rental-heading"
      className="bg-white py-10 sm:py-14 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 sm:text-sm">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-[#B8860B]"
              >
                Beranda
              </Link>
            </li>

            <li aria-hidden="true">/</li>

            <li>
              <Link
                href="/#Rental"
                className="transition-colors hover:text-[#B8860B]"
              >
                Rental Kami
              </Link>
            </li>

            <li aria-hidden="true">/</li>

            <li
              aria-current="page"
              className="font-semibold text-neutral-900"
            >
              {item.name}
            </li>
          </ol>
        </nav>

        {/* BACK BUTTON */}
        <Link
          href="/#Rental"
          className="mb-8 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#B8860B] transition-colors hover:text-[#8B6508] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2"
        >
          <span aria-hidden="true">←</span>
          Kembali ke Rental
        </Link>

        {/* PRODUCT DETAIL */}
        <article className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">

          {/* PRODUCT IMAGE */}
          <figure className="relative aspect-square w-full overflow-hidden border border-neutral-200 bg-white">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-contain p-5 sm:p-8"
            />

            {/* PRODUCT BADGE */}
            {item.badge && (
              <span className="absolute right-0 top-0 bg-[#D4A017] px-3 py-2 text-xs font-semibold text-white sm:text-sm">
                {item.badge}
              </span>
            )}
          </figure>

          {/* PRODUCT INFORMATION */}
          <div className="flex flex-col">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] sm:text-sm">
              Indonesia Projek Logistik
            </p>

            <h1
              id="detail-Rental-heading"
              className="mt-3 text-2xl font-extrabold leading-tight text-neutral-950 sm:text-3xl lg:text-4xl"
            >
              {item.name}
            </h1>

            <div
              aria-hidden="true"
              className="mt-4 h-1 w-20 bg-[#D4A017]"
            />

            {/* STATUS AND MODEL */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="font-semibold text-green-600">
                <span aria-hidden="true">✔</span>{" "}
                {item.availability}
              </span>

              <span aria-hidden="true" className="text-neutral-300">
                |
              </span>

              <span className="text-neutral-600">
                Model: {item.code}
              </span>
            </div>

            {/* BRAND */}
            <p className="mt-3 text-sm text-neutral-600">
              Merek:{" "}
              <span className="font-semibold text-neutral-900">
                {item.brand}
              </span>
            </p>

            {/* DESCRIPTION */}
            <section
              aria-labelledby="deskripsi-heading"
              className="mt-8"
            >
              <h2
                id="deskripsi-heading"
                className="mb-3 text-lg font-bold text-neutral-950 sm:text-xl"
              >
                Deskripsi Rental
              </h2>

              <p className="text-sm leading-8 text-neutral-600 sm:text-base">
                {item.description}
              </p>
            </section>

            {/* PRODUCT SPECIFICATIONS */}
            <section
              aria-labelledby="spesifikasi-heading"
              className="mt-8"
            >
              <h2
                id="spesifikasi-heading"
                className="mb-4 text-lg font-bold text-neutral-950 sm:text-xl"
              >
                Informasi Rental
              </h2>

              <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
                {item.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="grid grid-cols-2 gap-4 py-3 text-sm"
                  >
                    <dt className="text-neutral-500">
                      {detail.label}
                    </dt>

                    <dd className="font-semibold text-neutral-900">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* WHATSAPP BUTTON */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Konsultasi ${item.name} melalui WhatsApp`}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#20BD5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M12.04 2a9.87 9.87 0 0 0-8.45 14.98L2 22l5.18-1.36A9.92 9.92 0 1 0 12.04 2Zm0 18.1a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.08.81.82-3-.2-.31A8.18 8.18 0 1 1 12.04 20.1Zm4.49-6.13c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.78 2.72 4.31 3.82.6.26 1.07.42 1.44.54.61.19 1.16.16 1.6.1.49-.08 1.47-.6 1.68-1.19.21-.58.21-1.09.15-1.19-.06-.1-.23-.16-.48-.29Z" />
              </svg>

              Konsultasi Melalui WhatsApp
            </a>

          </div>
        </article>
      </div>
    </section>
  );
}
