import apiClient from '@/services/apiClient'

// interface AboutusShort {
//   title: string
//   description: string
//   logo: string
//   homeBgId: string
//   promises: string[]
// }
interface AboutUs {
  title: string
  description: string
}


export const aboutusShortRequest = async (data: any) => {
  console.log('about us short data is =>>> ', data)
  return apiClient.post('/home/aboutus-short', data)
}

export const aboutUsRequest = async (data: AboutUs) => {
  return apiClient.post('/about-us', {
    title: data.title,
    description: data.description,
  })
}

export const getaboutusShortRequest = async () => {
  return apiClient.get('/home/aboutus-short')
}

export const getAboutUsRequest = async () => {
  return apiClient.get('/about-us')
}
