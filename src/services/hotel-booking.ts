import apiClient from './apiClient'

export type BookingData = {
  name: string
  email: string
  phone: string
  checkInDate: Date
  checkOutDate: Date
  totalGuest: number
  totalRooms: number
}

export const getHotelBookingsRequest = async (page: number, limit: number) => {
  const response = await apiClient.get(
    `/hotel-booking?page=${page}&limit=${limit}`
  )
  return response
}

export const createHotelBookingRequst = async (data: BookingData) => {
  return apiClient.post('/hotel-booking', {
    name: data.name,
    email: data.email,
    phone: data.phone,
    checkInDate: data.checkInDate,
    checkOutDate: data.checkOutDate,
    totalGuest: data.totalGuest,
    totalRooms: data.totalRooms,
  })
}

export const deleteHotelBookingRequest = async (id: string) => {
  try {
    const response = await apiClient.delete(`/hotel-booking?id=${id}`)
    return response
  } catch (error) {
    console.error('Error deleting booking:', error)
    throw error
  }
}
