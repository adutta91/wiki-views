import { Box } from "components/ui/Box"
import { useArticlesContext } from "contexts/ArticlesContext"
import usePagination from "hooks/usePagination"
import { TopArticle } from "services/wikipedia"
import ListItem from "../ListItem"
import theme from "constants/theme"

const List = () => {
  const { articles, numPerPage } = useArticlesContext()
  const { displayItems } = usePagination<TopArticle>({ list: articles, numPerPage })

  return (
    <Box
      flexDirection="column"
      gap={{xs: "0px", md: "20px"}}
      padding={{xs: "0px", md: "32px" }}
      bgcolor={theme.colors.white}
      boxShadow="0px 2px 0px 1px rgba(5, 9, 13, 0.06)"
      borderRadius={{xs: "0", md: "16px"}}
      width="100%"
    >
      {displayItems.map(article => <ListItem key={article.rank} article={article} />)}
    </Box>
  )
}

export default List