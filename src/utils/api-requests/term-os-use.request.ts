import apiClient from '@/services/apiClient'

interface HomeBg {
  title: string
  description: string
}

export const addTermsRequest = async (data: HomeBg) => {
  return apiClient.post('/terms-of-use', {
    title: data.title,
    description: data.description,
  })
}

export const getTermsRequest = async () => {
  return apiClient.get('/terms-of-use')
}
