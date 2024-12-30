import apiClient from '@/services/apiClient'

export const AddHotelsRequest = async (data: any) => {
  return apiClient.post('/hotels', data)
}

export const getHotelsRequest = async (
  page: number,
  limit: number,
  ids: any
) => {
  return apiClient.get(
    `/hotel-shortdata?page=${page}&limit=${limit || 20}&filterIds=${ids}`,
    { data: ids }
  )
}

export const getSelectHotelsRequest = async (
  page: number,
  limit: number,
  ids: any
) => {
  return apiClient.get(
    `/select-hotels?page=${page}&limit=${limit || 20}&filterIds=${ids}`,
    { data: ids }
  )
}

export const getAllHotelsRequest = async (page: number, limit: number) => {
  return apiClient.get(`/all-hotels?page=${page}&limit=${limit || 20}`)
}

export const AddResortSectionRequest = async (data: any) => {
  return apiClient.post('/resorts', { resortSections: data })
}

export const getResortSectionRequest = async (data: any) => {
  return apiClient.get(`/resorts?page=${data.page}&limit=${data.limit}`)
}

export const getHotelRequest = async (data: any) => {
  return apiClient.get(`/hotels/${data}`)
}

export const getRecomendationsRequest = async () => {
  return apiClient.get(`/hotels/recomendations`)
}

// Assuming `apiClient` is an instance of axios or similar HTTP client
export const updateHotelRequest = async (hotelData: any) => {
  return apiClient.put(`/hotels`, hotelData)
}
