import { useMemo, useState } from "react"

type UsePaginationProps<T> = {
  list: T[]
  numPerPage: number
}

type PaginationControls<T> = {
  displayItems: T[]
  currentPage: number
  numPages: number
  nextPage: () => void
  prevPage: () => void
  goToPage: (idx: number) => void
}

const usePagination = <T>({
  list,
  numPerPage,
}: UsePaginationProps<T>): PaginationControls<T> => {
  const [currentPage, setCurrentPage] = useState(0)
  const numPages = useMemo(() => Math.ceil(list.length / numPerPage), [list, numPerPage])

  const validatePage = (idx: number): number => {
    if (idx >= list.length) return list.length - 1
    if (idx < 0) return 0

    return idx
  }

  return {
    currentPage,
    numPages,
    goToPage: (idx: number) => setCurrentPage(validatePage(idx)),
    nextPage: () => setCurrentPage(validatePage(currentPage - 1)),
    prevPage: () => setCurrentPage(validatePage(currentPage + 1)),
    displayItems: list.slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
  }
}

export default usePagination