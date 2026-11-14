
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    id: "nama-rental",
    label: "Nama Produk",
    image: "/Images/Produk.webp",
  },
  {
    id: "rental-advantage",
    label: "Keunggulan",
    image: "/Images/Advantage.webp",
  },
  {
    id: "rental-size",
    label: "Ukuran Produk",
    image: "/Images/Size.webp",
  },
];

export default function RentalNavDetail() {
  return (
    <nav
      aria-label="Navigasi bagian detail produk rental"
      className="sticky top-0 z-30 w-full border-y border-neutral-200 bg-white/95 shadow-sm backdrop-blur-md"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8">

        {/* Navigasi kembali */}
        <header className="border-b border-neutral-100 pb-3 sm:pb-4">
        <Link
          href="/#rental-showcase"
          className="group inline-flex min-h-11 items-center gap-2.5 rounded-lg bg-neutral-100 px-4 py-2.5 text-sm font-bold text-neutral-800 shadow-sm transition-all duration-200 hover:bg-amber-100 hover:text-amber-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 active:scale-[0.98] sm:min-h-12 sm:gap-3 sm:px-5 sm:text-base lg:text-lg"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="size-5 shrink-0 transition-transform duration-200 group-hover:-translate-x-1 sm:size-6"
          >
            <path
              d="M19 12H5M12 19l-7-7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Kembali</span>
        </Link>

        </header>

        {/* Navigasi antarbagian detail produk */}
        <ul className="grid grid-cols-3 items-center gap-2 pt-3 sm:gap-6 sm:pt-4 md:gap-8 lg:gap-12">
          {sections.map((section) => (
            <li key={section.id} className="min-w-0">
              <a
                href={`#${section.id}`}
                className="group flex min-h-14 flex-col items-center justify-center gap-1.5 py-1 text-center text-neutral-600 transition-colors duration-200 hover:text-amber-700 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:min-h-16 sm:gap-2"
              >
                <Image
                  src={section.image}
                  alt=""
                  aria-hidden="true"
                  width={96}
                  height={96}
                  className="size-7 shrink-0 object-contain transition-transform duration-200 group-hover:scale-110 sm:size-8 md:size-9 lg:size-10 xl:size-11 2xl:size-12"
                />
               <span className="text-sm font-semibold leading-snug sm:text-base md:text-base lg:text-base xl:text-lg">
              {section.label}
            </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
