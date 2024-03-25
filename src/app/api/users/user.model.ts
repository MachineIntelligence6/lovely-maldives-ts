/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from 'mongoose'

interface User {
  name: string
  email: string
  password: string
  role: {
    type: {
      type: string
      enum: ['SupperAdmin', 'Admin', 'Editor', 'User']
      default: 'User'
    }
  }
  avatar?: string
  contactNumber?: string
  address?: string
  dateOfBirth?: Date
  socialMediaProfiles?: {
    facebook?: string
    twitter?: string
  }
  lastLogin?: Date
  // bookings?: Schema.Types.ObjectId[]
  reviews?: Schema.Types.ObjectId[]
  // paymentMethods?: { type: string; cardNumber: string; expiryDate: string }[]
  preferences?: Record<string, any>
  notifications?: Schema.Types.ObjectId[]
  createdAt?: Date
  updatedAt?: Date
}

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    default: 'User',
    required: true,
  },
  avatar: { type: String },
  contactNumber: { type: String },
  address: { type: String },
  dateOfBirth: { type: Date },
  socialMediaProfiles: {
    facebook: { type: String },
    twitter: { type: String },
  },
  lastLogin: { type: Date },
  // bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  // paymentMethods: [
  //   {
  //     type: { type: String },
  //     cardNumber: { type: String },
  //     expiryDate: { type: String },
  //   },
  // ],
  preferences: { type: Schema.Types.Mixed },
  notifications: [{ type: Schema.Types.ObjectId, ref: 'Notification' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default model<User>('User', UserSchema)
