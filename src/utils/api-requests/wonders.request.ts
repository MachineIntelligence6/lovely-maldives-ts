import apiClient from '@/services/apiClient'

interface Wonders {
  title: string
  image: string
  homeBgId: string
}

export const wondersRequest = async (data: Wonders) => {
  return apiClient.post('/home/wonders', {
    title: data.title,
    image: data.image,
    homeBgId: data.homeBgId,
  })
}

export const getWondersRequest = async () => {
  return apiClient.get('/home/wonders')
}
