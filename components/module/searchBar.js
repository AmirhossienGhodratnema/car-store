
import { useState } from 'react';
import style from './searchBar.module.css'
import { useRouter } from 'next/router';

export default function SearchBar() {

    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const router = useRouter();


    const handlear = () => {
        if (min && max) {
            router.push(`/filter/${min}/${max}`);
        } else {
            alert('Min or max is not defined...');
        };
    };
    return (
        <div className={style.container}>
            <div>
                <input
                    placeholder="Inter min-price"
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                />
                <input
                    placeholder="Inter max-price"
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                />
            </div>
            <button onClick={handlear}>Search</button>
        </div>
    )
};
