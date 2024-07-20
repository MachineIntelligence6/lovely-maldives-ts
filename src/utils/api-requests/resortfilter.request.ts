import apiClient from '@/services/apiClient'

interface ResortFilter {
  type: string
  filter: string
}

interface EditResortFilter {
    type: string
    filter: string
    id: string
  }

export const AddResortFilterRequest = async (data: ResortFilter) => {
  return apiClient.post('/resort-filters', {
    type: data.type,
    filter: data.filter,
  })
}

export const getResortFilterRequest = async () => {
  return apiClient.get('/resort-filters')
}

export const deleteResortFilterRequest = async (id: string) => {
  return apiClient.delete(`/resort-filters?id=${id}`)
}

export const editResortFilterRequest = async (data: EditResortFilter) => {
    return apiClient.put(`/resort-filters`, {
        type: data.type,
        filter: data.filter,
        id: data.id,
      })
  }
