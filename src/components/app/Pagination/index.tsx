/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box } from "components/ui/Box"
import { usePaginationContext } from "contexts/PaginationContext"
import validatePageChange from "helpers/validatePageChange"
import { StyledIconButton, PageButton } from './styles'

const getValidPageRange = (currentPage: number, numPages: number): number[] => {
  const allPages = [...Array(numPages)].map((_el, i) => i)

  const bottomRange = validatePageChange(currentPage - 2, allPages)
  const topRange = validatePageChange(currentPage + 3, allPages)
  
  return allPages.slice(bottomRange, topRange)
}

const Pagination = () => {
  const {
    currentPage,
    numPages,
    nextPage,
    prevPage,
    goToPage
  } = usePaginationContext()

  const range = getValidPageRange(currentPage, numPages)

  return (
    <Box m="20px auto 0" gap="24px" data-testid="pagination">
      <StyledIconButton
        disabled={currentPage === 0}
        type="chevronLeft"
        fill="brandGreen"
        background="white"
        onClick={prevPage}
        width="40px"
        height="40px"
        data-testid="prev-button"
      />
      <Box gap="8px">
        {range.map(page => (
          <PageButton
            data-testid={`page-button-${page}-${currentPage === page ? 'active' : 'inactive'}`}
            key={page}
            width="40px"
            height="40px"
            background="white"
            active={currentPage === page}
            onClick={() => goToPage(page)}
          >
            {page + 1}
          </PageButton>
        ))}
      </Box>
      <StyledIconButton
        disabled={currentPage === numPages - 1}
        type="chevronRight"
        fill="brandGreen"
        background="white"
        onClick={nextPage}
        width="40px"
        height="40px"
        data-testid="next-button"
      />
    </Box>
  )
}

export default Pagination