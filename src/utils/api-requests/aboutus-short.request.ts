import apiClient from '@/services/apiClient'

interface AboutUs {
  title: string
  description: string
}


export const aboutusShortRequest = async (data: any) => {
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
