import mongoose from 'mongoose'

const resortSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  city: String,
  country: String,
  slug: String,
  rating: Number,
  image_url: String,
  facts: String,
  amenities: [String],
  price_per_night: Number,
  currency: String,
  contact_email: String,
  contact_phone: String,
})
export const Resort = mongoose.model('Resort', resortSchema)
