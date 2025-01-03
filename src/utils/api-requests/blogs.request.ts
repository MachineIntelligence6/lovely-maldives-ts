import apiClient from '@/services/apiClient'

interface Blogs {
  title: string
  description: string
  category: string
  coverImage: string
  metatags: string[]
}

export const addBlogRequest = async (data: Blogs) => {
  return apiClient.post('/blogs', {
    title: data.title,
    description: data.description,
    category: data.category,
    coverImage: data.coverImage,
    metatags: data.metatags,
  })
}

export const getBlogsRequest = async (data: any, category: string) => {
  return apiClient.get(
    `/blogs?page=${data.page}&limit=${data.limit}&category=${category}`
  )
}

export const getSingleBlogRequest = async (title: any) => {
  return apiClient.get(`/blogs/${title}`)
}

export const getRelatedBlogsRequest = async (category: any) => {
  return apiClient.get(`/blogs/related-articles?id=${category}`)
}

export const updateBlogRequest = async (blogData: any) => {
  return apiClient.put(`/blogs`, blogData)
}

export const deleteBlogRequest = async (id: string) => {
  return apiClient.delete(`/blogs?id=${id}`)
}
