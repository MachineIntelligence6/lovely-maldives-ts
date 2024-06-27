import apiClient from '@/services/apiClient'

export const getUsersRequest = async () => {
  return apiClient.get('/users')
}

export const changeUserStatusRequest = async (id: any, isApproved: boolean) => {
    return apiClient.put(`/users?id=${id}&isApproved=${isApproved}`)
  }

export const deleteSubscriptionsRequest = async (id: any) => {
  return apiClient.delete(`/subscribe/${id}`)
}
