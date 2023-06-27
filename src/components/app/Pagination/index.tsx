import { Box } from "components/ui/Box"
import { usePaginationContext } from "contexts/PaginationContext"
import { CircledIcon } from "components/ui/Icon"
import { styled } from "styled-components"
import { Encircle } from "components/ui/Encircle"

const StyledIconButton = styled(CircledIcon)<{ disabled: boolean }>`
  ${({ theme, disabled }) => `
    border: 1px solid ${theme.colors.neutralGray400};
    cursor: pointer;
    transition: all .2s ease-out;
    background: ${theme.colors.white};

    &:hover {
      box-shadow: 0 2px 10px -2px ${theme.colors.brandGreen};
    }

    ${disabled && `
      cursor: not-allowed;
      background: ${theme.colors.neutralGray400};

      svg {
        fill: ${theme.colors.neutralGray600};
      }

      &:hover {
        box-shadow: none;
      }
    `}
  `}
`

const PageButton = styled(Encircle)<{ active: boolean }>`
  ${({ theme, active }) => `
    1px solid ${theme.colors.neutralGray400};
    cursor: pointer;
    transition: all .2s ease-out;

    background: ${active ? theme.colors.avocadoGreen : theme.colors.white};
    color: ${active ? theme.colors.brandGreen : theme.colors.neutralGray900};
    border: 1px solid ${theme.colors.neutralGray400};
    
    &:hover {
      box-shadow: 0 2px 10px -2px ${theme.colors.brandGreen};
    }
  `}
`

const validatePage = (idx: number, list: any[]): number => {
  if (idx >= list.length) return list.length - 1
  if (idx < 0) return 0

  return idx
}

const getValidPageRange = (currentPage: number, numPages: number): number[] => {
  const allPages = [...Array(numPages)].map((_el, i) => i)

  const bottomRange = validatePage(currentPage - 2, allPages)
  const topRange = validatePage(currentPage + 3, allPages)
  
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
    <Box m="40px auto 0" gap="24px">
      <StyledIconButton
        disabled={currentPage === 0}
        type="chevronLeft"
        fill="brandGreen"
        background="white"
        onClick={prevPage}
        width="40px"
        height="40px"
      />
      <Box gap="8px">
        {range.map(page => (
          <PageButton
            fontFamily="Poppins, sans-serif"
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
      />
    </Box>
  )
}

export default Pagination