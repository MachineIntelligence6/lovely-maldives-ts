import apiClient from '@/services/apiClient'

interface TopBrands {
  title: string
  description: string
  ratings: string
  bgColor: string
  homeBgId: string
}

export const topBrandsRequest = async (data: TopBrands) => {
  return apiClient.post('/home/brands', {
    title: data.title,
    ratings: data.ratings,
    bgColor: data.bgColor,
    description: data.description,
    homeBgId: data.homeBgId,
  })
}

export const getTopBrandsRequest = async () => {
  return apiClient.get('/home/brands')
}
