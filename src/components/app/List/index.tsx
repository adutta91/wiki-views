import { Box } from "components/ui/Box"
import ListItem from "../ListItem"
import theme from "constants/theme"
import { TopArticle } from "services/wikipedia"

const List = ({ items }: { items: TopArticle[] }) => {
  return (
    <Box
      flexDirection="column"
      gap={{xs: "0px", md: "20px"}}
      padding={{xs: "0px", md: "32px" }}
      bgcolor={theme.colors.white}
      boxShadow="0px 2px 0px 1px rgba(5, 9, 13, 0.06)"
      borderRadius={{xs: "0", md: "16px"}}
      width="100%"
      mb="20px"
    >
      {!items.length ? (
        <Box
          justifyContent="center"
        >
          No articles found
        </Box>
      ) : null}
      {items.map(article => <ListItem key={`${article.rank}-${article.article}`} article={article} />)}
    </Box>
  )
}

export default List