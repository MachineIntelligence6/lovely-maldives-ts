import apiClient from '@/services/apiClient'

interface HomeBg {
  title: string
  policies: [{ question: string; answer: string }]
}

export const addPrivacyPolicyRequest = async (data: HomeBg) => {
  return apiClient.post('/privacy-policy', {
    title: data.title,
    policies: data.policies,
  })
}

export const getPrivacyPolicyRequest = async () => {
  return apiClient.get('/privacy-policy')
}
