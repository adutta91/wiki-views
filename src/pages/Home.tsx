import Navbar from 'components/app/Navbar'
import PageContent from 'components/ui/PageContent'
import Heading from 'components/ui/Heading'

const Home = () => {
  return (
    <>
      <Navbar />
      <PageContent>
        <Heading>Top Wikipedia articles</Heading>
      </PageContent>
    </>
  )
}

export default Home;