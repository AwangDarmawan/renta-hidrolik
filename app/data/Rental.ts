
export const Rental = [
  {
    slug: "hydraulic-jack",
    name: "Hydraulic Jack",
    image: "/Images/Produk-1.webp",
    alt: "Hydraulic jack Indonesia Projek Logistik",
    brand: "IPL",
    code: "RC-108",
    availability: "Tersedia",
    badge: "Produk Baru",
    description:
      "Hydraulic jack merupakan peralatan pengangkat hidrolik untuk pekerjaan jacking dan pengangkatan beban berat pada kebutuhan industri dan konstruksi.",
    details: [
      { label: "Merek", value: "IPL" },
      { label: "Model", value: "RC-108" },
      { label: "Fungsi", value: "Pengangkatan beban berat" },
      { label: "Penggunaan", value: "Industri dan konstruksi" },
    ],
  },
  {
    slug: "hydraulic-pump",
    name: "Hydraulic Pump",
    image: "/Images/Produk-2.webp",
    alt: "Hydraulic pump Indonesia Projek Logistik",
    brand: "IPL",
    code: "HP-100",
    availability: "Tersedia",
    badge: null,
    description:
      "Hydraulic pump digunakan untuk menghasilkan tekanan fluida pada sistem hydraulic.",
    details: [
      { label: "Merek", value: "IPL" },
      { label: "Model", value: "HP-100" },
      { label: "Fungsi", value: "Menghasilkan tekanan hydraulic" },
      { label: "Penggunaan", value: "Sistem peralatan hydraulic" },
    ],
  },
  {
    slug: "hydraulic-tools",
    name: "Hydraulic Tools",
    image: "/Images/Produk-2.webp",
    alt: "Hydraulic tools Indonesia Projek Logistik",
    brand: "IPL",
    code: "HT-200",
    availability: "Tersedia",
    badge: "Buku Terlaris",
    description:
      "Hydraulic tools merupakan peralatan pendukung pekerjaan hydraulic untuk berbagai kebutuhan industri dan proyek.",
    details: [
      { label: "Merek", value: "IPL" },
      { label: "Model", value: "HT-200" },
      { label: "Fungsi", value: "Mendukung pekerjaan hydraulic" },
      { label: "Penggunaan", value: "Industri dan proyek" },
    ],
  },
] as const;
