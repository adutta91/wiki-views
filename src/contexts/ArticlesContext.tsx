/* eslint-disable @typescript-eslint/no-empty-function */
import { format, subDays } from "date-fns";
import guessCountry from "helpers/guessCountry";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

import { TopArticle, fetchTopArticles, fetchSummary, fetchMonthlyViews, } from "services/wikipedia";

import { COUNTRY_OPTIONS } from "constants/countries";

type ArticlesContextType = {
  articles: TopArticle[]
  pinnedArticles: TopArticle[]
  selectedArticle?: TopArticle
  numPerPage: number
  date: string
  country?: string
  setNumPerPage: Dispatch<SetStateAction<number>>
  setDate: Dispatch<SetStateAction<string>>
  setCountry: Dispatch<SetStateAction<COUNTRY_OPTIONS | undefined>>
  setSelectedArticle?: Dispatch<SetStateAction<TopArticle | undefined>>
  setPinnedArticles: Dispatch<SetStateAction<TopArticle[]>>
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
}

const ArticlesContext = createContext<ArticlesContextType>(defaultState);

export const useArticlesContext = () => useContext(ArticlesContext)

export const ArticlesProvider = ({ children }: React.PropsWithChildren) => {
  const [articles, setArticles] = useState<TopArticle[]>([])
  const [pinnedArticles, setPinnedArticles] = useState<TopArticle[]>([])
  const [selectedArticle, setSelectedArticle] = useState<TopArticle>()
  const [numPerPage, setNumPerPage] = useState<number>(25)
  const [date, setDate] = useState(format(subDays(new Date(), 1), 'yyyy/MM/dd'))
  const [country, setCountry] = useState(guessCountry())

  const { data: topArticlesResponse } = fetchTopArticles({ country, date })

  useEffect(() => {
    if (topArticlesResponse?.data?.items?.[0]?.articles?.length) {
      setArticles(topArticlesResponse?.data?.items?.[0]?.articles)
    }
  }, [topArticlesResponse])

  return (
    <ArticlesContext.Provider value={{
      articles,
      pinnedArticles,
      selectedArticle,
      numPerPage,
      date,
      country,
      setNumPerPage,
      setDate,
      setCountry,
      setSelectedArticle,
      setPinnedArticles
    }}>
      {children}
    </ArticlesContext.Provider>
  )
}

