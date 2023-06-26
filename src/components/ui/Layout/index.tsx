import { PropsWithChildren } from "react";
import { Box } from "../Box";

const Layout = ({ children }: PropsWithChildren) => (
  <Box
    maxWidth={{ xs: "100%", md: '916px' }}
    width="100%"
    margin="0 auto"
    flexDirection="column"
  >
    {children}
  </Box>
)

export default Layout