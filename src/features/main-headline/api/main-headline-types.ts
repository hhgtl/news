export type ArticlesType = {
    source: {
        id: string | null,
        name: string
    },
    author: string | null,
    title: string,
    description: string,
    url: string,
    urlToImage: string | null,
    publishedAt: string,
    content: string
}

export type HeadlineResponse = {
    status: 'ok' | 'error';
    totalResults: number;
    articles: ArticlesType[]
}

