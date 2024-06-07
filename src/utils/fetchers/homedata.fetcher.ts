import apiClient from '@/services/apiClient'

export const homedataFetcher = () =>
  apiClient.get('/home').then((res) => res.data)
