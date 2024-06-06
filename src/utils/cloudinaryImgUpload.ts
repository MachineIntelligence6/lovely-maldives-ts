export const uploadImgToCloudinary = async (formData: any) => {
  const name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${name}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  )
  console.log('Response ', response)
  if (!response.ok) {
    throw new Error('Error uploading image')
  }

  return response.json()
}
