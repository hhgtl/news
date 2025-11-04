import s from './header.module.scss'
import {Input} from "@/shared/ui/input/input.tsx";

export const Header = () => {
    return (
        <header className={s.headers}>
            <h1 className={s.title}>WORLD NEWS</h1>
            <Input className={s.input} fullWidth />
        </header>
    )
}