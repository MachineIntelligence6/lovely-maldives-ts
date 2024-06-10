import apiClient from '@/services/apiClient'

export const footerRequest = async (data: any) => {
  return apiClient.post('/footer', data)
}

export const getFooterRequest = async () => {
  return apiClient.get('/footer')
}
