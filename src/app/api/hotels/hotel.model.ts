import { Schema, model } from 'mongoose'

interface IHotel {
  name: string
  description: string
  location: string
  country: string
  city: string
  image: string
  pricePerNight: number
  currency: string
  availableRooms: number
  maxGuestsPerRoom: number
  amenities: string[]
  reviews?: {
    user: Schema.Types.ObjectId
    rating: number
    comment: string
    createdAt: Date
  }[]
  bookings?: Schema.Types.ObjectId[]
  createdAt?: Date
  updatedAt?: Date
}

const hotelSchema = new Schema<IHotel>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  image: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  currency: { type: String, required: true },
  availableRooms: { type: Number, required: true },
  maxGuestsPerRoom: { type: Number, required: true },
  amenities: [{ type: String }],
  reviews: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      rating: { type: Number },
      comment: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const HotelModel = model<IHotel>('Hotel', hotelSchema)
