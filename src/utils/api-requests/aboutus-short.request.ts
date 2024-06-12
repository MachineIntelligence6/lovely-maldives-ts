import apiClient from '@/services/apiClient'

// interface AboutusShort {
//   title: string
//   description: string
//   logo: string
//   homeBgId: string
//   promises: string[]
// }

export const aboutusShortRequest = async (data: any) => {
  console.log('about us short data is =>>> ', data)
  return apiClient.post('/home/aboutus-short', data)
}

export const getaboutusShortRequest = async () => {
  return apiClient.get('/home/aboutus-short')
}
