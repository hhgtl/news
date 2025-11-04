import * as TabsRadixUI from '@radix-ui/react-tabs'
import type {ComponentPropsWithRef} from "react"
import clsx from "clsx";
import s from './tabs.module.scss'

export type TabType = {
    title: string
    value: string
}

type Props = {
    value: string
    onValueChange: (value: string) => void
    tabs: TabType[]
    fullWidth?: boolean
} & ComponentPropsWithRef<typeof TabsRadixUI.Root>

export const Tabs = ({ children, className, tabs, value, onValueChange, ref, fullWidth, ...rest }: Props) => {
    return (
        <TabsRadixUI.Root
            ref={ref}
            className={clsx(s.root, fullWidth && s.fullWidth)}
            defaultValue={value}
            onValueChange={onValueChange}
            {...rest}
        >
            <TabsRadixUI.List className={s.list}>
                {tabs.map(tab => (
                    <TabsRadixUI.Trigger
                        className={s.trigger}
                        key={tab.value}
                        value={tab.value}
                    >
                        {tab.title}
                    </TabsRadixUI.Trigger>
                ))}
            </TabsRadixUI.List>
        </TabsRadixUI.Root>
    )
}