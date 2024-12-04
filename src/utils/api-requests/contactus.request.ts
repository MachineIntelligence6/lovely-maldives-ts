import apiClient from '@/services/apiClient'

interface AboutUs {
  title: string
  description: string
}

export const contactUsRequest = async (data: AboutUs) => {
  return apiClient.post('/contact-us', {
    title: data.title,
    description: data.description,
  })
}

export const getContactUsRequest = async () => {
  return apiClient.get('/contact-us')
}
