/* eslint-disable @typescript-eslint/no-empty-function */
import { format, subDays } from "date-fns";
import guessCountry from "helpers/guessCountry";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

import { TopArticle, fetchTopArticles } from "services/wikipedia";

import { COUNTRY_OPTIONS } from "constants/countries";

type ArticlesContextType = {
  articles: TopArticle[]
  pinnedArticles: TopArticle[]
  numPerPage: number
  date: string
  country?: string
  setNumPerPage: Dispatch<SetStateAction<number>>
  setDate: Dispatch<SetStateAction<string>>
  setCountry: Dispatch<SetStateAction<COUNTRY_OPTIONS | undefined>>
  pinArticle: (article: TopArticle) => void
  unpinArticle: (article: TopArticle) => void
  isPinned: (article: TopArticle) => boolean
  search: () => void
};

const defaultState = {
  articles: [],
  pinnedArticles: [],
  numPerPage: 25,
  date: format(subDays(new Date(), 1), 'yyyy/MM/dd'),
  setNumPerPage: () => {},
  setDate: () => {},
  setCountry: () => {},
  setSelectedArticle: () => {},
  pinArticle: () => {},
  unpinArticle: () => {},
  isPinned: () => false,
  search: () => {},
}

const ArticlesContext = createContext<ArticlesContextType>(defaultState);

const loadPinnedArticles = () => {
  if (window.localStorage.getItem('gtWiki_pinnedArticles')) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return JSON.parse(window.localStorage.getItem('gtWiki_pinnedArticles')!)
  }

  return []
}

export const useArticlesContext = () => useContext(ArticlesContext)

export const ArticlesProvider = ({ children }: React.PropsWithChildren) => {
  const [articles, setArticles] = useState<TopArticle[]>([])
  const [pinnedArticles, setPinnedArticles] = useState<TopArticle[]>(loadPinnedArticles())
  const [numPerPage, setNumPerPage] = useState<number>(25)
  const [date, setDate] = useState(format(subDays(new Date(), 1), 'yyyy/MM/dd'))
  const [country, setCountry] = useState(guessCountry())

  const search = () => {
    fetchTopArticles({ country, date }).then(({ data }) => {
      if (data?.items?.[0]?.articles?.length) {
        setArticles(data?.items?.[0]?.articles)
      } else {
        setArticles([])
      }
    }).catch((err) => {
      console.error(err)
      console.error('Cannot find top articles')
      setArticles([])
    })
  }

  useEffect(() => {
    search()
  }, [])

  useEffect(() => {
    savePinnedArticles()
  }, [pinnedArticles.length])

  const savePinnedArticles = () => {
    window.localStorage.setItem('gtWiki_pinnedArticles', JSON.stringify(pinnedArticles))
  }

  const pinArticle = (article: TopArticle) => {
    setPinnedArticles([ ...pinnedArticles, article ])
  }

  const unpinArticle = (article: TopArticle) => {
    const oldArticles = [...pinnedArticles]
    const index = oldArticles.findIndex(item => JSON.stringify(article) === JSON.stringify(item));
    
    if (index !== -1) {
      oldArticles.splice(index, 1);
      setPinnedArticles(oldArticles)
    }
  }

  const isPinned = (article: TopArticle) => {
    const index = pinnedArticles.findIndex(item => JSON.stringify(article) === JSON.stringify(item));

    return index !== -1
  }

  return (
    <ArticlesContext.Provider value={{
      articles,
      pinnedArticles,
      numPerPage,
      date,
      country,
      setNumPerPage,
      setDate,
      setCountry,
      pinArticle,
      unpinArticle,
      isPinned,
      search
    }}>
      {children}
    </ArticlesContext.Provider>
  )
}

