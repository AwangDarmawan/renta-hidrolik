
import { RentalSlides } from "@/app/data/RentalSlides";
import Image from "next/image";

export default function RentalCarousel() {
  return (
    <section
      aria-label="Galeri Rental Hidrolik"
      className="relative isolate w-full overflow-hidden bg-linear-to-l from-[#D4A017] via-[#312401] to-[#251b01]"
    >
      {/* Daftar gambar carousel */}
      <ul className="relative m-0 flex min-h-75 list-none p-0 sm:min-h-100 lg:min-h-115">
        {RentalSlides.map((slide, index) => (
          <li
            key={slide.image}
            className={`invisible absolute inset-0 opacity-0 product-carousel-slide product-slide-${index + 1}`}
          >
            <figure className="relative h-full min-h-75 w-full overflow-hidden rounded-2xl sm:min-h-100 lg:min-h-11">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-contain"
              />
            </figure>
          </li>
        ))}
      </ul>

      {/* Indikator carousel */}
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 sm:bottom-6"
      >
        {RentalSlides.map((slide, index) => (
          <span
            key={slide.image}
            className={`size-2.5 rounded-full border border-white bg-transparent product-carousel-dot product-dot-${index + 1} sm:size-3`}
          />
        ))}
      </div>
    </section>
  );
}
