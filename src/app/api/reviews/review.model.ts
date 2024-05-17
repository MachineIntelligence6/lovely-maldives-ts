// import { Schema, model } from 'mongoose'

// interface IReview {
//   user: Schema.Types.ObjectId
//   entity: Schema.Types.ObjectId // Refers to 'Destination', 'Hotel', 'Resort'
//   rating: number
//   comment: string
//   createdAt?: Date
//   updatedAt?: Date
// }

// const reviewSchema = new Schema<IReview>({
//   user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   entity: { type: Schema.Types.ObjectId, required: true },
//   rating: { type: Number, required: true },
//   comment: { type: String },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// })

// export const ReviewModel = model<IReview>('Review', reviewSchema)
