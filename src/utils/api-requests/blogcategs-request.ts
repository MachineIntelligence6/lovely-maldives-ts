import apiClient from '@/services/apiClient'

export const AddBlogCategsRequest = async (data: any) => {
  return apiClient.post('/add-categ-blogs', data)
}

// export const AddResortSectionRequest = async (data: any) => {
//   return apiClient.post('/resorts', { resortSections: data })
// }

export const getBlogsSectionRequest = async () => {
  return apiClient.get(`/add-categ-blogs`)
}

export const deleteBlogSectionRequest = async (id: string) => {
  console.log('id ', id)
  return apiClient.delete(`/add-categ-blogs/${id}`)
}

// export const getRecomendationsRequest = async () => {
//   return apiClient.get(`/hotels/recomendations`)
// }
