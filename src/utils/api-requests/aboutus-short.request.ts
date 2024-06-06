import apiClient from '@/services/apiClient'

interface AboutusShort {
  title: string
  description: string
  homeBgId: string,
  promises: string[]
}

export const aboutusShortRequest = async (data: AboutusShort) => {
  return apiClient.post('/home/aboutus-short', {
    title: data.title,
    description: data.description,
    promises: data.promises,
    homeBgId: data.homeBgId,
  })
}

export const getaboutusShortRequest = async () => {
  return apiClient.get('/home/aboutus-short')
}
