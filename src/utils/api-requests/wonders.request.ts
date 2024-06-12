import apiClient from '@/services/apiClient'

// interface Wonders {
//   title: string
//   cards: string[{image: string, title: string}]
//   homeBgId: string
// }

export const wondersRequest = async (data: any) => {
  return apiClient.post('/home/wonders', {
    title: data.title,
    cards: data.cards,
    homeBgId: data.homeBgId,
  })
}

export const getWondersRequest = async () => {
  return apiClient.get('/home/wonders')
}
