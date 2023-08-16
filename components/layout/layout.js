import style from './css.module.css'


export default function Layout({ children }) {
    return (
        <>
            <header className={style.header}>
                <h2>Store car</h2>
                <p>Choose an buy your car</p>
            </header>
            <div className={style.container}>
                {children}
            </div>
            <footer className={style.footer}>
                Amirhossein Ghodratnema Next.js web | Store-car &copy;
            </footer>
        </>
    )
};
