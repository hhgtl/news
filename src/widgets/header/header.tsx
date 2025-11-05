import {Search} from "@/features/search/ui/search.tsx";
import s from './header.module.scss'

export const Header = () => {
    return (
        <header className={s.headers}>
            <h1 className={s.title}>WORLD NEWS</h1>
            <Search className={s.input} fullWidth />
        </header>
    )
}