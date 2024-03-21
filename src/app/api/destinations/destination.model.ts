import { Schema, model } from 'mongoose'

interface IDestination {
  name: string
  description: string
  country: string
  city: string
  activities: string[]
  popularAttractions: string[]
  image: string
  rating: number
  reviews?: {
    user: Schema.Types.ObjectId
    rating: number
    comment: string
    createdAt: Date
  }[]
  hotels?: Schema.Types.ObjectId[]
  flights?: Schema.Types.ObjectId[]
  createdAt?: Date
  updatedAt?: Date
}

const destinationSchema = new Schema<IDestination>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  activities: [{ type: String }],
  popularAttractions: [{ type: String }],
  image: { type: String, required: true },
  rating: { type: Number },
  reviews: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      rating: { type: Number },
      comment: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  hotels: [{ type: Schema.Types.ObjectId, ref: 'Hotel' }],
  flights: [{ type: Schema.Types.ObjectId, ref: 'Flight' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const DestinationModel = model<IDestination>(
  'Destination',
  destinationSchema
)
