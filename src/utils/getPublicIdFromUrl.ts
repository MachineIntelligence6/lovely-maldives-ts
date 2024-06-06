export const getPublicIdFromUrl = (url: any) => {
  const parts = url.split('/')
  const publicIdWithExtension = parts.slice(-2).join('/')
  return publicIdWithExtension.replace(/\.[^/.]+$/, '') // Remove the file extension
}
