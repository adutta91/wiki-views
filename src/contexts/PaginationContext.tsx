/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import validatePageChange from "helpers/validatePageChange";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type PaginationContextType = {
  displayItems: any[]
  currentPage: number
  numPages: number
  nextPage: () => void
  prevPage: () => void
  goToPage: (idx: number) => void
};

const defaultState = {
  displayItems: [],
  currentPage: 0,
  numPages: 1,
  nextPage: () => {},
  prevPage: () => {},
  goToPage: () => {},
}

const PaginationContext = createContext<PaginationContextType>(defaultState);

export const usePaginationContext = () => useContext(PaginationContext)

type PaginationProviderProps = {
  list: any[]
  numPerPage: number
} & React.PropsWithChildren

export const PaginationProvider = ({
  list,
  numPerPage,
  children
}: PaginationProviderProps) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [displayItems, setDisplayItems] = useState<any[]>([])
  const numPages = useMemo(() => Math.ceil(list.length / numPerPage), [list, numPerPage])

  useEffect(() => {
    setDisplayItems(list.slice(currentPage * numPerPage, (currentPage + 1) * numPerPage))
  }, [list, currentPage, numPerPage])

  return (
    <PaginationContext.Provider value={{
      currentPage,
      numPages,
      goToPage: (idx: number) => setCurrentPage(validatePageChange(idx, list)),
      nextPage: () => setCurrentPage(validatePageChange(currentPage + 1, list)),
      prevPage: () => setCurrentPage(validatePageChange(currentPage - 1, list)),
      displayItems
    }}>
      {children}
    </PaginationContext.Provider>
  )
}

