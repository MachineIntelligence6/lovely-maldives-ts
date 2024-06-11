import apiClient from './apiClient'

export const fetchHomeSectionsData = async () => {
  return apiClient.get('api/home').then((response) => response.data)
}
