import Calender from "../icons/Calender";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import style from './carInfo.module.css'

export default function CarInfo(props) {
    const { id, name, model, year, distance, price, image, location, description } = props;

    return (
        <>
            <div className={style.container}>
                <img src={image} className={style.image} />
                <h3 className={style.header}>
                    {name} {model}
                </h3>
                <div className={style.details}>
                    <div>
                        <Company />
                        <p>Company</p>
                        <span>{name}</span>
                    </div>
                    <div>
                        <Model />
                        <p>Model</p>
                        <span>{model}</span>
                    </div>
                    <div>
                        <Calender />
                        <p>First registration</p>
                        <span>{year}</span>
                    </div>
                    <div>
                        <Road />
                        <p>kms driven</p>
                        <span>{distance}</span>
                    </div>
                </div>
                <div className={style.details}>
                    <div>
                        <Location />
                        <p>Location</p>
                        <span>{location}</span>
                    </div>
                </div>
                <div className={style.details}>
                    <p className={style.descriptionTitle}>Extra Information</p>
                    <p className={style.descriptionText}>{description}</p>
                </div>
                <div className={style.details}>
                    <div className={style.price}>
                        <Money />
                        <p>Price:</p>
                        <span>{price}</span>
                    </div>
                </div>
                <button className={style.button}>Buy</button>
            </div>
        </>
    )
};
