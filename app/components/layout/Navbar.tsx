
import Link from "next/link";
import Image from "next/image";
import PhoneIcon from "../../Icons/PhoneIcon";
import UserIcon from "../../Icons/UserIcon";
import HomeIcon from "../../Icons/HomeIcon";



// ================================
// SHARED LINK STYLES
// ================================

const focusStyle =
  "rounded-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2";

// ================================
// NAVBAR SERVER COMPONENT
// ================================

export default function Navbar() {
  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="
      bg-linear-to-l 
       from-[#D4A017]
        via-[#B8860B]
         to-[#D4A017] 
         text-neutral-950">
        <div className="mx-auto flex min-h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LOGO */}
          <Link
            href="/"
            aria-label="IPL - Beranda"
            className="relative block h-9 w-28 shrink-0 sm:h-10 sm:w-36"
          >
            <Image
              src="/Images/ipl.webp"
              alt="IPL"
              fill
              priority
              sizes="(max-width: 640px) 112px, 144px"
              className="object-contain object-left"
            />
          </Link>

          {/* DESKTOP CONTACT NAVIGATION */}
          <nav
            aria-label="Navigasi kontak"
            className="hidden md:block"
          >
            <ul className="flex items-center gap-6 text-sm font-medium">
              
              <li>
                <Link
                  href="/hubungi-kami"
                  className={`${focusStyle} flex items-center gap-2 text-neutral-950 hover:text-white`}
                >
                  <PhoneIcon />
                  <span>Hubungi Kami</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/area-anggota"
                  className={`${focusStyle} flex items-center gap-2 text-neutral-950 hover:text-white`}
                >
                  <UserIcon />
                  <span>Area Anggota</span>
                </Link>
              </li>
             
            </ul>
          </nav>

          {/* MOBILE ACTION NAVIGATION */}
          <nav
            aria-label="Navigasi cepat"
            className="md:hidden"
          >
            <ul className="flex items-center gap-4">
              
           

              <li>
                <Link
                  href="/hubungi-kami"
                  aria-label="Hubungi Kami"
                  className={`${focusStyle} flex items-center p-1 text-neutral-950 hover:text-white`}
                >
                  <PhoneIcon mobile />
                </Link>
              </li>

              <li>
                <Link
                  href="/area-anggota"
                  aria-label="Area Anggota"
                  className={`${focusStyle} flex items-center p-1 text-neutral-950 hover:text-white`}
                >
                  <UserIcon mobile />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* PRIMARY NAVIGATION */}
      <nav
        aria-label="Navigasi utama"
        className="border-b border-gray-200 bg-white"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center gap-6 py-4 text-sm sm:gap-8 sm:text-base">
            <li className="shrink-0">
              <Link
                href="/"
                className={`${focusStyle} flex items-center gap-2 font-medium text-gray-800 hover:text-black`}
              >
                <HomeIcon />
                <span>Tentang</span>
              </Link>
            </li>

            <li className="shrink-0">
              <Link
                href="/produk"
                className={`${focusStyle} font-medium text-gray-800 hover:text-black`}
              >
                alat dan bahan  
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
