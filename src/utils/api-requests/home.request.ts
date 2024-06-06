import apiClient from '@/services/apiClient'

interface HomeBg {
  title: string
  subTitle: string
  bgImages: string[]
}

export const homeBgRequest = async (data: HomeBg) => {
  return apiClient.post('/home/home-bg', {
    title: data.title,
    subTitle: data.subTitle,
    bgImages: data.bgImages,
  })
}

export const getHomeBgRequest = async () => {
  return apiClient.get('/home/home-bg')
}