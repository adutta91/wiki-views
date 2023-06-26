const sanitizeTitle = (str: string): string => str.split('_').join(' ')

export default sanitizeTitle