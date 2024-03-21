import { Schema, model } from 'mongoose'

interface IImage {
  src: string
  name: string
  alt: string
  belongsTo: {
    type: {
      type: string
      enum: ['Hotel', 'Resort', 'Blog', 'Destination']
      default: 'Blog'
    }
    id: Schema.Types.ObjectId
  }
}

const imageSchema = new Schema<IImage>({
  src: { type: String, required: true },
  name: { type: String, required: true },
  alt: { type: String, required: true },
  belongsTo: {
    type: { type: String, required: true },
    id: { type: Schema.Types.ObjectId, required: true },
  },
})

export const ImageModel = model('Image', imageSchema)
