import Category from "@/components/module/category";
import CarPage from "@/components/templates/carPage";
import carsData from "@/data/carData";

export default function Cars() {
    return (
        <>
            <Category />
            <CarPage data={carsData} />
        </>
    )
};
