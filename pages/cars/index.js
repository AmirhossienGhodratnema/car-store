import Category from "@/components/module/category";
import SearchBar from "@/components/module/searchBar";
import CarPage from "@/components/templates/carPage";
import carsData from "@/data/carData";

export default function Cars() {
    return (
        <>
            <SearchBar />
            <Category />
            <CarPage data={carsData} />
        </>
    )
};
