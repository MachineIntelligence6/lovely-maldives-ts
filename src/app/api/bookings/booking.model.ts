import { Schema, model } from 'mongoose'

interface IBooking {
  user: Schema.Types.ObjectId
  hotel: Schema.Types.ObjectId
  checkInDate: Date
  checkOutDate: Date
  numberOfRooms: number
  totalPrice: number
  currency: string
  specialRequests?: string
  status: string
  guestDetails: { name: string; age: number; passportNumber?: string }[]
  payment?: Schema.Types.ObjectId
  invoice?: Schema.Types.ObjectId
  createdAt?: Date
  updatedAt?: Date
}

const bookingSchema = new Schema<IBooking>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  hotel: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  numberOfRooms: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  currency: { type: String, required: true },
  specialRequests: { type: String },
  status: { type: String, required: true },
  guestDetails: [
    {
      name: { type: String, required: true },
      age: { type: Number, required: true },
      passportNumber: { type: String, required: false },
    },
  ],
  payment: { type: Schema.Types.ObjectId, ref: 'Payment' },
  invoice: { type: Schema.Types.ObjectId, ref: 'Invoice' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const BookingModel = model<IBooking>('Booking', bookingSchema)
