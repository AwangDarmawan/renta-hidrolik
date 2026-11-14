
import { notFound } from "next/navigation";

import { Rental } from "@/app/data/Rental";
import RentalDetail from "@/app/components/Rental/RentalDetail";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Rental.map((item) => ({
    slug: item.slug,
  }));
}

export default async function RentalPage({ params }: Props) {
  const { slug } = await params;

  const item = Rental.find((product) => product.slug === slug);

  if (!item) {
    notFound();
  }

  return <RentalDetail item={item} />;
}
