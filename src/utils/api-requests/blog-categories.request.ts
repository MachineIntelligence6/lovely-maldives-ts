import apiClient from '@/services/apiClient'

export const createBlogCategory = async (data: any) => {
  return apiClient.post('/blog-categories', data)
}

export const getBlogCategories = async () => {
  return apiClient.get('/blog-categories')
}

export const delBlogCategories = async (id: string) => {
  return apiClient.delete(`/blog-categories?id=${id}`)
}

interface UpdateCategoryProps {
  id: string
  category: string
}

export const updateBlogCategories = async (data: UpdateCategoryProps) => {
  return apiClient.put(`/blog-categories`, data)
}
