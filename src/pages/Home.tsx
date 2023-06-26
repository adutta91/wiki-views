import Navbar from 'components/app/Navbar'
import PageContent from 'components/ui/PageContent'
import Heading from 'components/ui/Heading'
import { useArticlesContext } from 'contexts/ArticlesContext'
import SearchFilters from 'components/app/SearchFilters'

const Home = () => {
  useArticlesContext()

  return (
    <>
      <Navbar />
      <PageContent>
        <Heading>Top Wikipedia articles</Heading>
        <SearchFilters />
      </PageContent>
    </>
  )
}

export default Home;