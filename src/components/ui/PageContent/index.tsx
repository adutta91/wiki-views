import { Box, BoxTypes } from "../Box";
import Layout from "../Layout";

type PageContentProps = React.PropsWithChildren & BoxTypes

const PageContent = ({ children, ...props }: PageContentProps): React.ReactElement => (
  <Box
    p={{ xs: "32px 0", md: "56px" }}
    {...props}
  >
    <Layout>
      {children}
    </Layout>
  </Box>
)

export default PageContent;