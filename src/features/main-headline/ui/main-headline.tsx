import {useGetMainHeadlineQuery} from "@/features/main-headline/api/main-headline-api.ts";
import {NewsCard} from "@/shared/ui/news-card/news-card.tsx";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {selectCurrentTabValue} from "@/features/nav-tabs/model/nav-tabs-slice.ts";
import {useAppSelector} from "@/app/store/store.ts";
import {selectSearchValue} from "@/features/search/model/search-slice.ts";
import s from './main-headline.module.scss';

export const MainHeadline = () => {
    const category = useAppSelector(selectCurrentTabValue);
    const searchPhrase = useAppSelector(selectSearchValue);
    const [isMobileView, setIsMobileView] = useState(false);
    const {data} = useGetMainHeadlineQuery({category, searchPhrase})
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

    return (
        <main className={s.container}>
            {mainNews && !isMobileView &&(
                <div className={s.mainNews}>
                    <div>
                        <NewsCard variant={'main'} article={mainNews[0]} />
                        <NewsCard variant={'small'} article={mainNews[1]} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <NewsCard variant={'large'} background={'dark'} article={mainNews[2]}/>
                        <NewsCard variant={'medium'} article={mainNews[3]} />
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