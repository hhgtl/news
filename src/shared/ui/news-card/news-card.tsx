import clsx from "clsx";
import {formatDate, removeCharCountSuffix} from "@/shared/lib";
import type {ArticlesType} from "@/features/main-headline/api/main-headline-types.ts";
import noImage from '../../assets/image/no-image.jpg'
import s from './news-card.module.scss';

export type NewsCardVariantType = 'main' | 'large' | 'medium' | 'small' | 'bigImage' | 'onlyText'

type Props = {
    article: ArticlesType;
    variant: NewsCardVariantType;
    background?: 'dark' | 'light';
}

export const NewsCard = ({variant, article, background = 'light'}: Props) => {
    const {author, content, description, title, publishedAt, url, urlToImage} = article;
    const myVariant = !urlToImage && variant === 'bigImage' ? 'onlyText' : variant;
    const desc = description ? removeCharCountSuffix(description) : ''
    const cont = content ? removeCharCountSuffix(content) : ''

    return (
        <div className={clsx(s.card, s[background], s[myVariant])}>
            {myVariant !== 'onlyText' && <div className={s.imgWrapper}>
                <img loading="lazy" className={s.image} src={urlToImage || noImage} alt={title} />
                <div className={s.overlay}></div>
            </div>}

            {myVariant === 'small' && <div className={s.contentWrapper}>
                <a href={url} target={'_blank'}><h2 className={s.title}>{title}</h2></a>
                <p className={s.content}>{cont}</p>
            </div> }

            {myVariant !== 'small' && <div className={s.contentWrapper}>
                <a href={url} target={'_blank'}><h2 className={s.title}>{title}</h2></a>
                <p className={s.content}>{cont}</p>
            </div>}

            {myVariant === 'onlyText' && <p className={s.description}>{desc}</p>}

            <div className={s.cardInfo}>
                {author && <p className={s.author}>By {author}</p>}
                <p className={s.date}>{formatDate(publishedAt)}</p>
            </div>

        </div>
    )
}