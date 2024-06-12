import apiClient from '@/services/apiClient'

// interface OurServices {
//   title: string
//   icon: string
//   image: string
//   bgColor: string
//   homeBgId: string
// }

export const ourServicesRequest = async (data: any) => {
  console.log('new Services =>>> ', data)
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

// export const deleteOurServiceRequest = async () => {
//   return apiClient.get('/home/our-services')
// }
