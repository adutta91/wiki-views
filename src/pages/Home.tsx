import Navbar from 'components/app/Navbar'
import PageContent from 'components/ui/PageContent'
import Heading from 'components/ui/Heading'
import SearchFilters from 'components/app/SearchFilters'
import ArticleList from 'components/app/ArticleList'
import { FadeIn } from 'components/ui/Box/TransitionedBox'
import { useArticlesContext } from 'contexts/ArticlesContext'
import { PaginationProvider } from 'contexts/PaginationContext'
import List from 'components/app/List'

const Home = () => {
  const { articles, numPerPage, pinnedArticles } = useArticlesContext()

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
        {
          pinnedArticles.length ? (
            <FadeIn animationDelay='0.4s' zIndex="1">
              <List items={pinnedArticles} />
            </FadeIn>
          ) : null
        }
        <FadeIn animationDelay='0.4s' zIndex="1">
          <PaginationProvider list={articles} numPerPage={numPerPage}>
            <ArticleList />
          </PaginationProvider>
        </FadeIn>
      </PageContent>
    </>
  )
}

export default Home;