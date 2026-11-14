
import RentalCarousel from "./components/Rental/RentalCarousel";
import RentalShowcase from "./components/Rental/RentalShowcase";
import HeroShowcase from "./components/Tentang/HeroShowcase";





export default function Home() {
  return (
      <main>
      <HeroShowcase />
      <RentalCarousel/>
      <RentalShowcase/>
    </main>
  );
}
