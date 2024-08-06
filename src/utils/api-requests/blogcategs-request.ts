import apiClient from '@/services/apiClient'

export const AddBlogCategsRequest = async (data: any) => {
  return apiClient.post('/add-categ-blogs', data)
}

export const getBlogsSectionRequest = async (category?: string) => {
  return apiClient.get(`/add-categ-blogs?category=${category}`)
}

export const deleteBlogSectionRequest = async (id: string) => {
  return apiClient.delete(`/add-categ-blogs/${id}`)
}
