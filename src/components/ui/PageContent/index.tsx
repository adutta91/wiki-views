import { Box, BoxTypes } from "../Box";

type PageContentProps = React.PropsWithChildren & BoxTypes

const PageContent = ({ children, ...props }: PageContentProps): React.ReactElement => (
  <Box
    p={{ xs: "32px 0", md: "56px" }}
    {...props}
  >
    {children}
  </Box>
)

export default PageContent;