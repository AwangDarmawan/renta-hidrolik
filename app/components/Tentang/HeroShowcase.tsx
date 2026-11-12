
import Image from "next/image";
import Link from "next/link";

export default function HeroShowcase() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-120 items-center overflow-hidden bg-neutral-950 sm:min-h-136.25 lg:min-h-160"
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/Images/tentang-4.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-contain object-right"
      />

      {/* IMAGE OVERLAY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-black/35"
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-2xl text-white">

          {/* BRAND */}
          <p className="mb-4 text-sm font-bold uppercase tracking-wide sm:text-base">
            Indonesia Projek Logistik
          </p>

          {/* MAIN HEADING */}
          <h1
            id="hero-title"
            className="max-w-xl text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Rental Alat Jacking & Hydraulic Jack
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 text-base italic font-medium leading-relaxed text-white sm:text-lg">
            PT Indonesia Projek Logistik menyediakan jasa rental alat jacking dan rental hydraulic jack untuk kebutuhan industri, konstruksi, serta proyek pengangkatan beban berat. Kami menyediakan pilihan hydraulic jack kapasitas 50 ton, 100 ton, 200 ton, hingga 500 ton untuk mendukung pekerjaan lifting, jacking, dan pemindahan beban berat. Dengan dukungan peralatan yang sesuai kebutuhan proyek dan tenaga profesional, kami berkomitmen memberikan solusi pengangkatan yang aman, efektif, dan efisien.
          </p>

          {/* CALL TO ACTION */}
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/pelayanan"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-linear-to-b from-[#D4A017] via-[#B8860B] to-[#D4A017] px-7 py-3 text-sm font-bold uppercase text-neutral-950 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:brightness-110 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              Pelayanan
            </Link>

            <Link
              href="/hubungi-kami"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-linear-to-r from-[#D4A017] via-[#B8860B] to-[#D4A017] px-7 py-3 text-sm font-bold uppercase text-neutral-950 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:brightness-110 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 "
            >
              Konsultasi Gratis
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
