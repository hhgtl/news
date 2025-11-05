import s from './footer.module.scss'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <h2 className={s.title}>WORLD NEWS</h2>
            <p className={s.author}>Created by Petro Sahal</p>
        </footer>
    )
}