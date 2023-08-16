import Card from '../module/card'
import style from './carPage.module.css'

export default function CarPage({ data }) {
    return (
        <div className={style.container}>
            {
                data?.map(car => (
                    <Card key={car.id} {...car} />
                ))
            }
        </div>
    )
};
