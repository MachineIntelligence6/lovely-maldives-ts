// /* eslint-disable import/no-extraneous-dependencies */
// /* eslint-disable no-async-promise-executor */
// // import cloudinary from './cloudinary'
// import cloudinary from 'cloudinary'

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// })

// export default cloudinary

// export const uploadImage = async (file: File, folder: string) => {
//   const buffer = await file.arrayBuffer()
//   const bytes = Buffer.from(buffer)

//   return new Promise((resolve, reject) => {
//     cloudinary.uploader
//       .upload_stream({ resource_type: 'auto' }, (error: any, result: any) => {
//         if (error) {
//           console.log('error ', error)
//           reject(error)
//         } else {
//           console.log('result', result)
//           resolve(result)
//         }
//       })
//       .end(bytes)
//   })
// }
