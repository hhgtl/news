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
    { title: 'General', value: 'general' },
    { title: 'Entertainment', value: 'entertainment' },
    { title: 'Business', value: 'business' },
    { title: 'Health', value: 'health' },
    { title: 'Science', value: 'science' },
    { title: 'Sports', value: 'sports' },
    { title: 'Technology', value: 'technology' }
]


export const NavTabs = () => {
    const currentTab = useAppSelector(selectCurrentTabValue)
    const dispatch = useAppDispatch()

    return (
        <Tabs fullWidth tabs={tabs} value={currentTab} onValueChange={(value) => dispatch(setTabValue(value as ValueType))}/>
    )
}