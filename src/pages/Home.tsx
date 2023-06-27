import Navbar from 'components/app/Navbar'
import PageContent from 'components/ui/PageContent'
import Heading from 'components/ui/Heading'
import SearchFilters from 'components/app/SearchFilters'
import List from 'components/app/List'
import { FadeIn } from 'components/ui/Box/TransitionedBox'
import { useArticlesContext } from 'contexts/ArticlesContext'
import { PaginationProvider } from 'contexts/PaginationContext'

const Home = () => {
  const { articles, numPerPage } = useArticlesContext()

  return (
    <>
      <Navbar />
      <PageContent>
        <FadeIn animationDelay='0s' zIndex="3">
          <Heading>Top Wikipedia articles</Heading>
        </FadeIn>
        <FadeIn animationDelay='0.2s' zIndex="2">
          <SearchFilters />
        </FadeIn>
        <FadeIn animationDelay='0.4s' zIndex="1">
          <PaginationProvider list={articles} numPerPage={numPerPage}>
            <List />
          </PaginationProvider>
        </FadeIn>
      </PageContent>
    </>
  )
}

export default Home;