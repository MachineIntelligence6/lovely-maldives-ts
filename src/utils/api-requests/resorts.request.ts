import apiClient from '@/services/apiClient'

export const deleteResortHotelRequest = async (hotelId: string) => {
  return apiClient.patch(`/resorts/hotel-remove`, {
    hotelId,
  })
}
