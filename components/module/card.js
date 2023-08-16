import style from './card.module.css';
import Location from "../icons/Location";
import Link from 'next/link';


export default function Card(props) {
    const { id, name, model, year, distance, price, image, location } = props;

    return (
        <Link href={`/cars/${id}`}>
            <div className={style.container}>
                <img src={image} className={style.image} />
                <h4 className={style.title}>{`${name} ${model}`}</h4>
                <p className={style.detail}>{`${year} . ${distance}km`}</p>
                <div className={style.footer}>
                    <p>$ {price}</p>
                    <div className={style.location}>
                        <p>{location}</p>
                        <Location />
                    </div>
                </div>
            </div>
        </Link>
    )
};
