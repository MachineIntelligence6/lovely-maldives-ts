import apiClient from '@/services/apiClient'

interface HomeBg {
  title: string
  description: string
}

export const addPrivacyPolicyRequest = async (data: HomeBg) => {
  return apiClient.post('/home/home-bg', {
    title: data.title,
    subTitle: data.description,
  })
}

export const getPrivacyPolicyRequest = async () => {
  return apiClient.get('/home/home-bg')
}