import apiClient from '@/services/apiClient'

interface SocialLinkSection {
  title: string
  socialMedia: string
  link: string
  image: string
  homeBgId: string
}

export const socialLinkSectionRequest = async (data: SocialLinkSection) => {
  return apiClient.post('/home/social', {
    title: data.title,
    socialMedia: data.socialMedia,
    link: data.link,
    image: data.image,
    homeBgId: data.homeBgId,
  })
}

export const getSocialLinkSectionRequest = async () => {
  return apiClient.get('/home/social')
}
