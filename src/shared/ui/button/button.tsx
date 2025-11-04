import type {ComponentPropsWithRef, ReactNode} from "react";
import clsx from "clsx";
import s from './button.module.scss'

type Props = {
    children: ReactNode
    className?: string
} & ComponentPropsWithRef<'button'>

export const Button = ({children, className, ref}: Props) => {
    return <button className={clsx(s.button, className)} ref={ref}>{children}</button>
}