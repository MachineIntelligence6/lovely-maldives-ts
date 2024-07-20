import apiClient from '@/services/apiClient'

export const ourServicesRequest = async (data: any) => {
  return apiClient.post('/home/our-services', {
    title: data.title,
    subTitle: data.subTitle,
    cardBgcolor: data.cardBgcolor,
    services: data.services,
    subTitleColor: data.subTitleColor,
    homeBgId: data.homeBgId,
  })
}

export const getOurServicesRequest = async () => {
  return apiClient.get('/home/our-services')
}
