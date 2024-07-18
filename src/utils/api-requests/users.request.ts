import apiClient from '@/services/apiClient'

export const getUsersRequest = async () => {
  return apiClient.get('/users')
}

export const changeUserStatusRequest = async (id: any, status: any) => {
  return apiClient.put(`/users?id=${id}&status=${status}`)
}

export const deleteUserRequest = async (id: any) => {
  return apiClient.delete(`/users/${id}`)
}
