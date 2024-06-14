import apiClient from '@/services/apiClient'

interface AboutMaldivesShort {
  title: string
  description: string
  link: string
  homeBgId: string
}

interface AboutMaldives {
  title: string
  description: string
}

export const aboutMaldivesShortRequest = async (data: AboutMaldivesShort) => {
  return apiClient.post('/home/about-maldives-short', {
    title: data.title,
    link: data.link,
    description: data.description,
    homeBgId: data.homeBgId,
  })
}

export const aboutMaldivesRequest = async (data: AboutMaldives) => {
  return apiClient.post('/about-maldives', {
    title: data.title,
    description: data.description,
  })
}

export const getAboutMaldivesShortRequest = async () => {
  return apiClient.get('/home/about-maldives-short')
}

export const getAboutMaldivesRequest = async () => {
  return apiClient.get('/about-maldives')
}
