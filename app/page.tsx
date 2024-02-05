import CarFilterOption from "@/components/Home/CarFilterOption";
import CarList from "@/components/Home/CarList";
import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import { getCars } from "@/libs/carsControllers";

export default async function Home() {
  const data = await getCars();

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <Search />
      <CarFilterOption />
      <CarList carsList={data} />
    </div>
  );
}
