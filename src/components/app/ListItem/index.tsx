import { Box } from "components/ui/Box"
import theme from "constants/theme"
import sanitizeTitle from "helpers/sanitizeTitle"
import { useEffect, useState } from "react"
import { TopArticle, ArticleInfo, TopView } from "services/wikipedia"
import { fetchSummary, fetchMonthlyViews, } from "services/wikipedia";
import format from "date-fns/format"
import { startOfMonth, endOfMonth } from "date-fns"
import dayjs from "dayjs"
import { useArticlesContext } from "contexts/ArticlesContext"
import { Wrapper, Preview, ActiveIcon } from './styles'

const ListItem = ({ article }: { article: TopArticle }) => {
  const { pinArticle, unpinArticle, isPinned } = useArticlesContext()

  const [open, setOpen] = useState(false)
  const [pinned, setPinned] = useState(isPinned(article))
  const [articleInfo, setArticleInfo] = useState<ArticleInfo>({
    title: sanitizeTitle(article.article),
    extract: "Loading..."
  })
  const [topViews, setTopViews] = useState<TopView[]>([])
  const start = format(startOfMonth(new Date), 'yyyyMMddhh')
  const end = format(endOfMonth(new Date), 'yyyyMMddhh')

  useEffect(() => {
    if (open) {
      fetchSummary({ title: article.article }).then(({ data }) => {
        setArticleInfo(Object.values(data?.query?.pages || {})[0] as ArticleInfo)
      })

      fetchMonthlyViews({
        title: article.article,
        start,
        end,
      }).then(({ data }) => {
        setTopViews((data?.items || []).sort((a: TopView, b: TopView) => b.views - a.views).slice(0, 3))
      })
    }
  }, [open])

  return (
    <Wrapper
      p={{xs: "24px 12px", md: "24px"}}
      border={{
        xs: ``,
        md: `1px solid ${theme.colors.neutralGray300}`
      }}
      borderBottom={`1px solid ${theme.colors.neutralGray300}`}
      borderRadius={{ xs: "0", md: "12px" }}
      cursor="pointer"
      open={open}
      flexDirection="column"
      onClick={() => setOpen(!open)}
      maxHeight={{ xs: 'none', md: '74px' }}
      data-testid="list-item"
    >
      <Box gap="20px">
        <Box color={theme.colors.neutralGray500} width="20px" fontFamily="Lora">
          {article.rank}
        </Box>
        <Box flex="1" color={theme.colors.black} fontFamily="Lora">
          {articleInfo?.title || sanitizeTitle(article.article)}
        </Box>
        <Box
          color={theme.colors.neutralGray600}
          alignItems="center"
          gap="20px"
        >
          {article.views_ceil.toLocaleString()} views
          <ActiveIcon
            type={pinned ? 'pinSolid' : 'pinOutline'}
            fill="marigold600"
            pinned={pinned}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
              const newPinnedValue = !pinned;

              if (newPinnedValue) pinArticle(article)
              else unpinArticle(article)

              setPinned(newPinnedValue)
            }}
          />
        </Box>
      </Box>
      {
        open ? (
          <Box
            mt="20px"
            ml={{xs: "0", md: "40px" }}
            flexDirection="column"
          >
            <Preview>
              {articleInfo?.extract || '[extract unavailable]'}
            </Preview>
            <Box bgcolor={theme.colors.neutralGray400} height="1px" width="100%" m="20px 0" />
            <Box flexDirection="column" gap="16px">
              <Box
                color={theme.colors.neutralGray900}
                textTransform='uppercase'
                fontSize="12px"
                fontWeight="600"
              >
                Top views this month
              </Box>
              {topViews.map(viewData => (
                <Box
                  key={viewData.timestamp}
                  fontSize="14px"
                  justifyContent="space-between"
                >
                  <Box>{dayjs(viewData.timestamp, 'YYYYMMDDHH').format('MMMM D, YYYY')}</Box>
                  <Box
                    color={theme.colors.brandMarigold}
                    fontWeight="500"
                  >
                    {viewData.views.toLocaleString()} views
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ) : null
      }
    </Wrapper>
  )
}

export default ListItem