import apiClient from '@/services/apiClient'

// interface OurCollection {
//   title: string
//   image: string
//   ratings: string
//   homeBgId: string
// }

export const collectionRequest = async (data: any) => {
  return apiClient.post('/home/collections', {
    title: data.title,
    ids: data?.ids,
    homeBgId: data.homeBgId,
  })
}

export const getCollectionsRequest = async () => {
  return apiClient.get('/home/collections')
}
