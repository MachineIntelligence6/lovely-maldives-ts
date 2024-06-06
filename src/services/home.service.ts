import apiClient from './apiClient'

export const fetchHomeSectionsData = async () => {
  return apiClient.get('/home').then((response) => response.data)
}
