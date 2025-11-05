import {useGetMainHeadlineQuery} from "@/features/main-headline/api/main-headline-api.ts";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {selectCurrentTabValue} from "@/features/nav-tabs/model/nav-tabs-slice.ts";
import {useAppSelector} from "@/app/store/store.ts";
import {selectSearchValue} from "@/features/search/model/search-slice.ts";
import {NewsCard} from "@/shared/ui";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import s from './main-headline.module.scss';

export const MainHeadline = () => {
    const category = useAppSelector(selectCurrentTabValue);
    const searchPhrase = useAppSelector(selectSearchValue);
    const [isMobileView, setIsMobileView] = useState(false);
    const {data, isLoading, isFetching, isError} = useGetMainHeadlineQuery({category, searchPhrase})
    const mainNews = data?.articles.slice(0, 4);
    const otherNews = isMobileView ? data?.articles : data?.articles.slice(5)
    const skeletonArr = Array(10).fill(0);

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
                    {isLoading || isFetching ? <>
                        <div>
                            <Skeleton width={600} height={365} />
                            <Skeleton style={{margin: '34px 15px'}} width={570} height={64} />
                        </div>
                        <div>
                            <Skeleton width={560} height={260} />
                            <Skeleton style={{margin: 25}} width={510} height={188} />
                        </div>
                    </> : <>
                        <div>
                            {mainNews[0] && <NewsCard variant={'main'} article={mainNews[0]} />}
                            {mainNews[1] && <NewsCard variant={'small'} article={mainNews[1]} />}
                        </div>
                        <div>
                            {mainNews[2] && <NewsCard variant={'large'} background={'dark'} article={mainNews[2]}/>}
                            {mainNews[3] && <NewsCard variant={'medium'} article={mainNews[3]} />}
                        </div>
                    </>
                    }

                </div>
            )}

            <div className={s.otherNews}>
                {isLoading || isFetching ? skeletonArr.map((_, index) => {
                    return <Skeleton key={index} width={370} height={340} />
                }) : otherNews?.map((article) => {
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

