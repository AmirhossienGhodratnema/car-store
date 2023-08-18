import Link from "next/link";
import styles from "./AllButton.module.css";

export default function AllCars() {
    return (
        <div className={styles.container}>
            <Link href="/cars">See all cars</Link>
        </div>
    );
}
