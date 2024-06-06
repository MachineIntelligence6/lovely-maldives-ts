import crypto from 'crypto'

export const generateSignature = (publicId: any, timestamp: any) => {
  const data = 
  `public_id=${publicId}&timestamp=${timestamp}${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`
  return crypto.createHash('sha1').update(data).digest('hex')
}
