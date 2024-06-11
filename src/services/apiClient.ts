import axios from 'axios'

console.log('API Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL)

const apiClient = axios.create({
  baseURL: 'https://lovely-maldives-ts.vercel.app/api',
  timeout: 60000,
})

export default apiClient
