import Card from "@/components/module/card";
import Category from "@/components/module/category";
import carsData from "@/data/carData";
import { useRouter } from "next/router"

export default function Categories() {
    const router = useRouter();
    const { category } = router.query;
    const filter = carsData.filter(item => item.category == category)
    return (
        <div>
            <Category />
            <div className="container">
                {
                    filter?.map(item => (
                        <Card key={item.id} {...item} />
                    ))
                }
            </div>
            <style jsx >{`
                .container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    max-width: 1200px;
                    margin: auto;
                  }
            `}</style>
        </div>
    )
};
