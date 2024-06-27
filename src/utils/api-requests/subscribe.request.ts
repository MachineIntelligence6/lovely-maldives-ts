import apiClient from '@/services/apiClient'

export const createSubscriptionRequest = async (data: any) => {
  return apiClient.post('/subscribe', data)
}

export const getSubscriptionsRequest = async () => {
  return apiClient.get('/subscribe')
}

export const deleteSubscriptionsRequest = async (id: any) => {
  return apiClient.delete(`/subscribe/${id}`)
}
