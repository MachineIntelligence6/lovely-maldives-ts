export const formatCategory = (category: string | null): string => {
  if (!category) return 'ALL ARTICLES'

  const categoryMap: Record<string, string> = {
    'all-articles': 'ALL ARTICLES',
    'latest-articles': 'LATEST ARTICLES',
    popular: 'POPULAR ARTICLES',
  }

  return (
    categoryMap[category.toLowerCase()] ||
    category.replace('-', ' ').toUpperCase()
  )
}
