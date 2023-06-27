import { usePaginationContext } from "contexts/PaginationContext"
import List from "../List"
import Pagination from "../Pagination"
import { Box } from "components/ui/Box"

const ArticleList = () => {
  const { displayItems } = usePaginationContext()

  return (
    <Box flexDirection="column" width="100%">
      <List items={displayItems} />
      <Pagination />
    </Box>
  )
}

export default ArticleList