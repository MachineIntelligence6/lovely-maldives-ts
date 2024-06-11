import axios from 'axios'

console.log('API Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL)

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 60000,
})

export default apiClient
