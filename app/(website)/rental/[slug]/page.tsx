import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Rental } from "@/app/data/Rental";
import RentalDetail from "@/app/components/Rental/RentalDetail";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// GENERATE STATIC PARAMS
export function generateStaticParams() {
  return Rental.map((item) => ({
    slug: item.slug,
  }));
}

// GET RENTAL
function getRental(slug: string) {
  return Rental.find((item) => item.slug === slug);
}

// SEO METADATA
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getRental(slug);

  if (!item) {
    return {
      title: "Rental Tidak Ditemukan | Indonesia Projek Logistik",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${item.name} | Rental Hidrolik IPL`,
    description: item.description,
    alternates: {
      canonical: `/rental/${item.slug}`,
    },
    openGraph: {
      title: `${item.name} | Rental Hidrolik IPL`,
      description: item.description,
      type: "website",
      images: [
        {
          url: item.image,
          alt: item.alt,
        },
      ],
    },
  };
}

// RENTAL DETAIL PAGE
export default async function RentalDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getRental(slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <RentalDetail item={item} />
    </main>
  );
}