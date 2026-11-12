
import Image from "next/image";
import Link from "next/link";
import { Rental} from "@/app/data/Rental";

const whatsappNumber = "6281234567890";

export default function RentalShowcase() {
  return (
    <section
      aria-labelledby="rental-heading"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <header className="mb-9 text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] sm:text-sm">
            Indonesia Projek Logistik
          </p>

          <h1
            id="rental-heading"
            className="text-2xl font-extrabold uppercase tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl"
          >
            Rental Hidrolik Kami
          </h1>

          <div
            aria-hidden="true"
            className="mx-auto mt-3 h-0.5 w-24 bg-[#D4A017]"
          />
        </header>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {Rental.map((item) => {
            const message =
              `Halo IPL, saya ingin bertanya mengenai ${item.name} dengan model ${item.code}. Mohon informasi detail dan ketersediaannya.`;

            const whatsappUrl =
              `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            return (
              <article
                key={item.slug}
                className="group relative flex min-w-0 flex-col overflow-hidden border border-neutral-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D4A017] hover:shadow-lg"
              >
                {/* PRODUCT IMAGE */}
                <Link
                  href={`/rental/${item.slug}`}
                  aria-label={`Lihat detail ${item.name}`}
                  className="relative block"
                >
                  <figure className="relative aspect-square w-full overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                      className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105 sm:p-4"
                    />
                  </figure>

                  {/* PRODUCT BADGE */}
                  {item.badge && (
                    <span className="absolute right-0 top-0 bg-[#D4A017] px-2 py-1 text-[10px] font-semibold text-white sm:px-3 sm:text-xs">
                      {item.badge}
                    </span>
                  )}
                </Link>

                {/* PRODUCT INFORMATION */}
                <div className="flex flex-1 flex-col px-2 pb-3 pt-3 text-center sm:px-4 sm:pb-4">

                  {/* PRODUCT NAME */}
                  <Link
                    href={`/rental/${item.slug}`}
                    aria-label={`Lihat detail ${item.name}`}
                    className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                  >
                    <h2 className="line-clamp-2 min-h-12 text-sm font-semibold leading-relaxed text-neutral-950 transition-colors duration-300 hover:text-[#B8860B] sm:min-h-14 sm:text-base">
                      {item.name}
                    </h2>
                  </Link>

                  {/* BRAND */}
                  <p className="mt-1 text-[11px] text-neutral-500 sm:text-sm">
                    Merek:{" "}
                    <span className="font-semibold text-neutral-700">
                      {item.brand}
                    </span>
                  </p>

                  {/* AVAILABILITY AND MODEL */}
                  <p className="mt-2 text-[11px] leading-relaxed sm:text-sm">
                    <span className="font-semibold text-green-600">
                      <span aria-hidden="true">✔</span>{" "}
                      {item.availability}
                    </span>
                    <span className="text-neutral-400"> / </span>
                    <span className="text-neutral-700">{item.code}</span>
                  </p>

                  {/* ACTIONS */}
                  <div className="mt-auto flex items-center gap-2 pt-4">

                    {/* DETAIL */}
                    <Link
                      href={`/rental/${item.slug}`}
                      aria-label={`Lihat deskripsi lengkap ${item.name}`}
                      className="inline-flex min-h-9 flex-1 items-center justify-center border border-[#D4A017] px-2 py-2 text-xs font-semibold text-neutral-800 transition-colors duration-300 hover:bg-[#D4A017] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 sm:text-sm"
                    >
                      Lihat Detail
                    </Link>

                    {/* WHATSAPP */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Tanyakan ${item.name} melalui WhatsApp`}
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-all duration-300 hover:scale-105 hover:bg-[#20BD5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path d="M12.04 2a9.87 9.87 0 0 0-8.45 14.98L2 22l5.18-1.36A9.92 9.92 0 1 0 12.04 2Zm0 18.1a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.08.81.82-3-.2-.31A8.18 8.18 0 1 1 12.04 20.1Zm4.49-6.13c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.78 2.72 4.31 3.82.6.26 1.07.42 1.44.54.61.19 1.16.16 1.6.1.49-.08 1.47-.6 1.68-1.19.21-.58.21-1.09.15-1.19-.06-.1-.23-.16-.48-.29Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
