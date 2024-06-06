import apiClient from '@/services/apiClient'

interface OurCollection {
  title: string
  image: string
  ratings: string
  homeBgId: string
}

export const collectionRequest = async (data: OurCollection) => {
  return apiClient.post('/home/collections', {
    title: data.title,
    image: data.image,
    ratings: data.ratings,
    homeBgId: data.homeBgId,
  })
}

export const getCollectionsRequest = async () => {
  return apiClient.get('/home/collections')
}
