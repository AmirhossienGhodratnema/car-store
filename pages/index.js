import CarPage from "@/components/templates/carPage";
import carsData from "@/data/carData";

export default function Home() {
  return (
    <div>
      <CarPage data={carsData} />
    </div>
  )
}
