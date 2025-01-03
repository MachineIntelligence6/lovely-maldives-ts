import apiClient from '@/services/apiClient'

interface FormData {
  name: string
  email: string
  number: string
  message: string
}

export const sendEmailRequest = async (data: FormData) => {
  const response = apiClient.post('/send-email', data)
  return response
}
