// import { Schema, model } from 'mongoose'

// interface IHotel {
//   name: string
//   description: string
//   location: string
//   country: string
//   city: string
//   slug: string
//   images?: {
//     src: string
//     name: string
//     alt: string
//     belongsTo: {
//       type: {
//         type: string
//         enum: ['Hotel', 'Resort', 'Blog', 'Destination']
//         default: 'Blog'
//       }
//       id: Schema.Types.ObjectId
//     }
//   }
//   pricePerNight: number
//   currency: string
//   availableRooms: number
//   maxGuestsPerRoom: number
//   amenities: string[]
//   reviews?: {
//     user: Schema.Types.ObjectId
//     rating: number
//     comment: string
//     createdAt: Date
//   }[]
//   contactEmail: string
//   contactPhone: string
//   // bookings?: Schema.Types.ObjectId[]
//   createdAt?: Date
//   updatedAt?: Date
// }

// const hotelSchema = new Schema<IHotel>({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   location: { type: String, required: true },
//   country: { type: String, required: true },
//   city: { type: String, required: true },
//   slug: String,
//   images: [
//     {
//       src: { type: String },
//       name: { type: String },
//       alt: { type: String },
//       belongsTo: {
//         type: String,
//         default: 'Hotel',
//       },
//       id: Schema.Types.ObjectId,
//       createdAt: { type: Date, default: Date.now },
//     },
//   ],
//   pricePerNight: { type: Number, required: true },
//   currency: { type: String, required: true },
//   availableRooms: { type: Number, required: true },
//   maxGuestsPerRoom: { type: Number, required: true },
//   amenities: [{ type: String }],
//   reviews: [
//     {
//       user: { type: Schema.Types.ObjectId, ref: 'User' },
//       rating: { type: Number },
//       comment: { type: String },
//       createdAt: { type: Date, default: Date.now },
//     },
//   ],
//   // bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
//   contactEmail: String,
//   contactPhone: String,
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// })

// export const HotelModel = model<IHotel>('Hotel', hotelSchema)
