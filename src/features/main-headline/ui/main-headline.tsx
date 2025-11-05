import {useGetMainHeadlineQuery} from "@/features/main-headline/api/main-headline-api.ts";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {selectCurrentTabValue} from "@/features/nav-tabs/model/nav-tabs-slice.ts";
import {useAppSelector} from "@/app/store/store.ts";
import {selectSearchValue} from "@/features/search/model/search-slice.ts";
import {Loader, NewsCard} from "@/shared/ui";
import s from './main-headline.module.scss';

export const MainHeadline = () => {
    const category = useAppSelector(selectCurrentTabValue);
    const searchPhrase = useAppSelector(selectSearchValue);
    const [isMobileView, setIsMobileView] = useState(false);
    const {data, isLoading, isFetching, isError} = useGetMainHeadlineQuery({category, searchPhrase})
    const mainNews = data?.articles.slice(0, 4);
    const otherNews = isMobileView ? data?.articles : data?.articles.slice(5)

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1240);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isLoading || isFetching) {
        return <div className={s.loader}>
            <Loader size={150} color={'#04594d'} stroke={10}/>;
        </div>
    }

    if (data?.totalResults === 0 || !data || isError) {
        return <div className={s.noResults}>
            <p>Немає результатів або перевищено ліміт запитів :( </p>
            <p>Підключіть свій API-ключ у файлі .env VITE_API_KEY, отриманий на сайті newsapi.org</p>
        </div>
    }


    return (
        <main className={s.container}>
            {mainNews && !isMobileView &&(
                <div className={s.mainNews}>
                    <div>
                        {mainNews[0] && <NewsCard variant={'main'} article={mainNews[0]} />}
                        {mainNews[1] && <NewsCard variant={'small'} article={mainNews[1]} />}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {mainNews[2] && <NewsCard variant={'large'} background={'dark'} article={mainNews[2]}/>}
                        {mainNews[3] && <NewsCard variant={'medium'} article={mainNews[3]} />}
                    </div>
                </div>
            )}

            <div className={s.otherNews}>
                {otherNews?.map((article) => {
                    const cardVariant = 'bigImage';
                    return (<div className={clsx(s[cardVariant])} key={article.title}>
                        <NewsCard article={article} variant={cardVariant}
                        />
                    </div>)
                })}
            </div>

        </main>
    )
}