import apiClient from '@/services/apiClient'

export const headerRequest = async (data: any) => {
  return apiClient.post('/header', data)
}

export const getHeaderRequest = async () => {
  return apiClient.get('/header')
}
