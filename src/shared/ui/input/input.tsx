import {type ChangeEvent, type ComponentPropsWithRef} from 'react'
import clsx from 'clsx'
import search from '@/shared/assets/icons/search.svg'

import s from './input.module.scss'

type Props = {
    value?: string
    fullWidth?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
} & ComponentPropsWithRef<'input'>

export const Input = ({ value, onChange, fullWidth, className, ref }: Props) => {
    return (
        <div className={clsx(s.container, fullWidth && s.fullWidth, className && className)}>
            <img className={clsx(s.searchIcon)} src={search} alt="пошук" />
            <input
                name={'пошук'}
                ref={ref}
                onChange={onChange}
                value={value}
                className={clsx(s.input, fullWidth && s.fullWidth)}
                placeholder={'Пошук'}
            />
            <div className={s.inputTextBlock}>Пошук</div>
        </div>
    )
}