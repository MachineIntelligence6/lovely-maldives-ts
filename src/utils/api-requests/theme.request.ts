import apiClient from '@/services/apiClient'

export const createThemeConfigRequest = async (data: any) => {
  return apiClient.post('/theme', data)
}

export const getThemeConfigRequest = async () => {
  return apiClient.get('/theme')
}
