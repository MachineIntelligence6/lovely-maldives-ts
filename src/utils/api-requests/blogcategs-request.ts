import apiClient from '@/services/apiClient'

export const AddBlogCategsRequest = async (data: any) => {
  return apiClient.post('/add-categ-blogs', data)
}

export const getBlogsSectionRequest = async () => {
  return apiClient.get(`/add-categ-blogs`)
}

export const deleteBlogSectionRequest = async (id: string) => {
  return apiClient.delete(`/add-categ-blogs/${id}`)
}
