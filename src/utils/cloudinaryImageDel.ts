import crypto from 'crypto'
import { generateSignature } from './generateSignature'
import { getPublicIdFromUrl } from './getPublicIdFromUrl'

export const deleteCloudinaryImage = async (url: any) => {
  const timestamp = Math.round(new Date().getTime() / 1000).toString()
  const publicId = getPublicIdFromUrl(url)
  console.log('public id ', publicId)
  const signature = generateSignature(publicId, timestamp)

  try {
    const formData = new URLSearchParams()
    formData.append('public_id', publicId)
    formData.append('timestamp', timestamp)
    if (process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY) {
        formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY)
    }
    formData.append('signature', signature)

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/destroy`,
        {
            method: 'POST',
            body: formData,
        }
    )
    console.log('REsponse ', response)
    if (!response.ok) {
      throw new Error('Error deleting image')
    }

    return response.json()
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
