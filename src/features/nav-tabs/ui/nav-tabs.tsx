import {Tabs} from "@/shared/ui";
import {useAppDispatch, useAppSelector} from "@/app/store/store.ts";
import {
    selectCurrentTabValue,
    setTabValue,
    type ValueType
} from "@/features/nav-tabs/model/nav-tabs-slice.ts";

type Tab = {
    title: string
    value: ValueType
}

const tabs: Tab[] = [
    {title: 'Світ', value: 'world'},
    {title: 'Спорт', value: 'sport'},
    {title: 'Технології', value: 'tech'},
    {title: 'Здоровя', value: 'health'}]


export const NavTabs = () => {
    const currentTab = useAppSelector(selectCurrentTabValue)
    const dispatch = useAppDispatch()

    return (
        <Tabs fullWidth tabs={tabs} value={currentTab} onValueChange={(value) => dispatch(setTabValue(value as ValueType))}/>
    )
}