import apiClient from '@/services/apiClient'

interface Blogs {
  title: string
  description: string
  category: string
}

export const addBlogRequest = async (data: Blogs) => {
  return apiClient.post('/blogs', {
    title: data.title,
    description: data.description,
    category: data.category,
  })
}

export const getBlogsRequest = async (data: any) => {
  return apiClient.get(`/blogs?page=${data.page}&limit=${data.limit}`)
}
