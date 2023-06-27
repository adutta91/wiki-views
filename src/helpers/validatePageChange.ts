/* eslint-disable @typescript-eslint/no-explicit-any */

const validatePageChange = (idx: number, list: any[]): number => {
  if (idx >= list.length) return list.length - 1
  if (idx < 0) return 0

  return idx
}

export default validatePageChange