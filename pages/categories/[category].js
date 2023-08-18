import Back from "@/components/icons/Back";
import Card from "@/components/module/card";
import Category from "@/components/module/category";
import carsData from "@/data/carData";
import { useRouter } from "next/router"

export default function Categories() {
    const router = useRouter();
    const { category } = router.query;
    const filter = carsData.filter(item => item.category == category)
    const backHandler =() =>{
        router.back();
    };


    return (
        <div>
            <div className='back' onClick={backHandler}>
                <Back />
                <p>back</p>
            </div>
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
              
                .back {
                    display: flex;
                    align-items: center;
                    font-size: 1.5rem;
                    width: fit-content;
                    background-color: #befa00;
                    padding: 10px 15px;
                    border-radius: 5px;
                    margin: auto;
                    cursor: pointer;
                }

                .back p{
                    margin: 0 .5rem;
                }
  
            `}</style>
        </div>
    )
};
