import apiClient from '@/services/apiClient'

interface FAQS {
  title: string
  description: string
  // categories: string[]
  policies: [
    { category: string; questions: [{ question: string; answer: string }] },
  ]
}

export const addFaqRequest = async (data: FAQS) => {
  return apiClient.post('/faqs', {
    title: data.title,
    faqs: data.policies,
    // categories: data.categories,
    description: data.description,
  })
}

export const getFaqRequest = async () => {
  return apiClient.get('/faqs')
}
