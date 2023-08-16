import CarInfo from "@/components/templates/carInfo";
import carsData from "@/data/carData";
import { useRouter } from "next/router"


export default function SingleCarInfo() {
    const router = useRouter();
    const { id } = router.query;
    const car = carsData.find(item => item.id == id);

    return <CarInfo {...car} />
};
