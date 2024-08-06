import apiClient from '@/services/apiClient'

export const getGlobalSearchResults = async (search: string) => {
  return apiClient.get(`/global-search?search=${search}`)
}
