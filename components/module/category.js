import Link from "next/link";
import Sport from "../icons/Sport";
import Hatchback from "../icons/Hatchback";
import Suv from "../icons/Suv";
import Sedan from "../icons/Sedan";
import style from './category.module.css'
import { useRouter } from "next/router";

export default function Category() {
    return (
        <>
            <div className={style.container}>
                <Link href={`/categories/sedan`}>
                    <div>
                        <p>Sedan</p>
                        <Sedan />
                    </div>
                </Link>
                <Link href="/categories/suv">
                    <div>
                        <p>SUV</p>
                        <Suv />
                    </div>
                </Link>
                <Link href="/categories/hatchback">
                    <div>
                        <p>Hatchback</p>
                        <Hatchback />
                    </div>
                </Link>
                <Link href="/categories/sport">
                    <div>
                        <p>Sport cars</p>
                        <Sport />
                    </div>
                </Link>
            </div>
        </>
    )
};
