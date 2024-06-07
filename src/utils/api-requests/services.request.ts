import apiClient from '@/services/apiClient'

interface OurServices {
  title: string
  icon: string
  image: string
  bgColor: string
  homeBgId: string
}

export const ourServicesRequest = async (data: OurServices) => {
  return apiClient.post('/home/our-services', {
    title: data.title,
    icon: data.icon,
    image: data.image,
    bgColor: data.bgColor,
    homeBgId: data.homeBgId,
  })
}

export const getOurServicesRequest = async () => {
  return apiClient.get('/home/our-services')
}
