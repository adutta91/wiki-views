import Navbar from 'components/app/Navbar'
import PageContent from 'components/ui/PageContent'
import Heading from 'components/ui/Heading'
import SearchFilters from 'components/app/SearchFilters'
import List from 'components/app/List'
import { FadeIn } from 'components/ui/Box/TransitionedBox'

const Home = () => {
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
          <List />
        </FadeIn>
      </PageContent>
    </>
  )
}

export default Home;