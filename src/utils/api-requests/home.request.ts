import apiClient from '@/services/apiClient'

interface HomeBgRequestData {
  title: string
  subTitle: string
  bgImages: string[]
  mobileBgImages: string[]
}

export const homeBgRequest = async (data: HomeBgRequestData) => {
  if (!data.title || typeof data.title !== 'string') {
    throw new Error('Invalid or missing "title" field')
  }
  if (typeof data.subTitle !== 'string') {
    throw new Error('Invalid "subTitle" field')
  }

  return apiClient.post('/home/home-bg', {
    title: data.title,
    subTitle: data.subTitle,
    bgImages: data.bgImages,
    mobileBgImages: data.mobileBgImages,
  })
}

export const getHomeBgRequest = async () => {
  return apiClient.get('/home/home-bg')
}
