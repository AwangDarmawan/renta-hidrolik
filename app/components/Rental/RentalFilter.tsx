
import { rentalCategories } from "@/app/components/utils/RentalUtils";

export default function RentalFilter() {
  return (
    <aside
      aria-label="Filter kategori peralatan rental"
      className="rental-filter mb-8 flex justify-start sm:mb-10"
    >
      <div className="w-full max-w-34 sm:max-w-45 lg:max-w-50 xl:max-w-55">
        <label
          htmlFor="rental-category"
          className="mb-2 block text-xs font-bold italic text-neutral-800 sm:text-sm"
        >
         Cari Kategori Peralatan
        </label>

        <div className="relative">
          <select
            id="rental-category"
            name="category"
            defaultValue="all"
            aria-describedby="rental-filter-description"
            className="min-h-10 w-full appearance-none rounded-md border border-neutral-300 bg-white py-2 pl-3 pr-8 text-xs font-bold text-neutral-800 shadow-sm outline-none transition-colors hover:border-[#B8860B] focus-visible:border-[#B8860B] focus-visible:ring-2 focus-visible:ring-[#D4A017]/30 sm:min-h-11 sm:text-sm"
          >
            <option value="all">Semua Rental</option>
            {rentalCategories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 flex w-8 items-center justify-center text-[#B8860B]"
          >
            <svg viewBox="0 0 20 20" fill="none" className="size-4">
              <path
                d="m5 7.5 5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </aside>
  );
}
