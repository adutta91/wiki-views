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
  setPinnedArticles: Dispatch<SetStateAction<TopArticle[]>>
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
  setPinnedArticles: () => {},
  search: () => {},
}

const ArticlesContext = createContext<ArticlesContextType>(defaultState);

export const useArticlesContext = () => useContext(ArticlesContext)

export const ArticlesProvider = ({ children }: React.PropsWithChildren) => {
  const [articles, setArticles] = useState<TopArticle[]>([])
  const [pinnedArticles, setPinnedArticles] = useState<TopArticle[]>([])
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
    })
  }

  useEffect(() => {
    search()
  }, [])

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
      setPinnedArticles,
      search
    }}>
      {children}
    </ArticlesContext.Provider>
  )
}

