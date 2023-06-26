import axios from "axios";
import { COUNTRY_OPTIONS } from "constants/countries"
import { useQuery } from "@tanstack/react-query";
import { format, startOfMonth, endOfMonth } from "date-fns";

type SearchParams = {
  country?: COUNTRY_OPTIONS;
  date: string;
}

export type TopArticle = {
  article: string
  views_ceil: number
}

type TopArticlesResponse = {
  data: {
    items: {
      articles: TopArticle[]
    }[]
  }
}

type ArticleSummaryResponse = {
  data: {
    query: {
      pages: {
        [id: string]: {
          title: string
          extracts: string
        }
      }
    }
  }
}

type TopViewsResponse = {
  data: {
    items: {
      views: number
    }[]
  }
}

const TOP_ARTICLES_BASE_URL = ({ date, }: SearchParams): string => `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${date}`
const TOP_ARTICLES_COUNTRY_BASE_URL = ({ date, country }: SearchParams): string => `https://wikimedia.org/api/rest_v1/metrics/pageviews/top-per-country/${country}/all-access/${date}`
const SUMMARY_BASE_URL = ({ title }: { title?: string }): string => `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${title}&origin=*`
const TOP_VIEWS = ({ title, start, end }: { title?: string, start: string, end: string }): string => `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia.org/all-access/all-agents/${title}/daily/${start}/${end}`

const getTopArticlesUrl = ({ date, country }: SearchParams): string => {
  if (country) return TOP_ARTICLES_COUNTRY_BASE_URL({ date, country })

  return TOP_ARTICLES_BASE_URL({ date })
}

export const fetchTopArticles = ({ country, date }: SearchParams) => {
  const formattedDate = format(new Date(date), "yyyy/MM/dd")
  const url = getTopArticlesUrl({ country, date: formattedDate })

  return useQuery<any, any, TopArticlesResponse, any>({
    queryKey: [`TOP_ARTICLES_${country}_${formattedDate}`],
    queryFn: () => axios.get(url)
  })
}

export const fetchSummary = ({ title }: { title?: string }) => {
  const url = SUMMARY_BASE_URL({ title })

  return useQuery<any, any, ArticleSummaryResponse, any>(
    {
      queryKey: [`SUMMARY_${title}`],
      queryFn: () => axios.get(url),
    },
    { enabled: !!title }
  )
}

export const fetchMonthlyViews = ({ title }: { title?: string }) => {
  const start = format(startOfMonth(new Date), 'yyyyMMddhh')
  const end = format(endOfMonth(new Date), 'yyyyMMddhh')
  const url = TOP_VIEWS({ title, start, end })

  return useQuery<any, any, TopViewsResponse, any>(
    {
      queryKey: [`TOP_VIEWS_${title}`],
      queryFn: () => axios.get(url),
    },
    { enabled: !!title }
  )
}
