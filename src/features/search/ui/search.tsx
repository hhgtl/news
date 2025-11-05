import {Input} from "@/shared/ui";
import {selectSearchValue, setSearchValue} from "@/features/search/model/search-slice.ts";
import {useAppDispatch, useAppSelector} from "@/app/store/store.ts";
import type {InputProps} from "@/shared/ui/input/input.tsx";

type Props =  InputProps

export const Search = ({...rest}: Props) => {
    const searchValue = useAppSelector(selectSearchValue);
    const dispatch = useAppDispatch();

    return <Input {...rest} value={searchValue} onChange={(e) => dispatch(setSearchValue(e.target.value))}/>
}