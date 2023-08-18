import AllCars from "@/components/module/AllButton";
import Category from "@/components/module/category";
import SearchBar from "@/components/module/searchBar";
import CarPage from "@/components/templates/carPage";
import carsData from "@/data/carData";

export default function Home() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Category />
      <AllCars />
      <CarPage data={cars} />
    </div>
  )
}
