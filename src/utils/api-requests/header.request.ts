import apiClient from '@/services/apiClient'

export const headerRequest = async (data: any) => {
  console.log('header data =>>> ', data)
  return apiClient.post('/header', data)
}

export const getHeaderRequest = async () => {
  return apiClient.get('/header')
}
