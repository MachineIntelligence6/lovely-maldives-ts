import apiClient from '@/services/apiClient'

export const deleteHotelRequest = async (id: string) => {
  return apiClient.delete(`/all-hotels?id=${id}`)
}
