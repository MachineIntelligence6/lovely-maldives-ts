import apiClient from '@/services/apiClient'

interface FAQs {
  title: string,
  description: string,
  categories: string[],
  policies: [{ question: string; answer: string }]
}

export const addFaqRequest = async (data: FAQs) => {
  return apiClient.post('/faqs', {
    title: data.title,
    policies: data.policies,
    categories: data.categories,
    description: data.description
  })
}

export const getFaqRequest = async () => {
  return apiClient.get('/faqs')
}
