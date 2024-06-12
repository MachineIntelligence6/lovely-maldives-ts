import apiClient from '@/services/apiClient'

// interface TopBrands {
//   title: string
//   description: string
//   ratings: string
//   bgColor: string
//   homeBgId: string
// }

export const topBrandsRequest = async (data: any) => {
  return apiClient.post('/home/brands', {
    title: data.title,
    brands: data.brands,
    bgColor: data.bgColor,
    homeBgId: data.homeBgId,
  })
}

export const getTopBrandsRequest = async () => {
  return apiClient.get('/home/brands')
}
