import apiClient from '@/services/apiClient'

interface SideImage {
  image: string
  homeBgId: string
}

export const sideImageRequest = async (data: SideImage) => {
  return apiClient.post('/side-image', {
    image: data.image,
    homeBgId: data.homeBgId,
  })
}

export const getSideImageRequest = async () => {
  return apiClient.get('/side-image')
}
