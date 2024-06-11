import apiClient from '@/services/apiClient'

interface AboutMaldivesShort {
  title: string
  description: string
  homeBgId: string
}

export const aboutMaldivesShortRequest = async (data: AboutMaldivesShort) => {
  return apiClient.post('api/home/about-maldives-short', {
    title: data.title,
    description: data.description,
    homeBgId: data.homeBgId,
  })
}

export const getAboutMaldivesShortRequest = async () => {
  return apiClient.get('api/home/about-maldives-short')
}
