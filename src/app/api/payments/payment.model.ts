// import { Schema, model } from 'mongoose'

// interface IPayment {
//   user: Schema.Types.ObjectId
//   amount: number
//   currency: string
//   paymentMethod: string
//   transactionID: string
//   status: string
//   booking?: Schema.Types.ObjectId
//   invoice?: Schema.Types.ObjectId
//   createdAt?: Date
//   updatedAt?: Date
// }

// const paymentSchema = new Schema<IPayment>({
//   user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   amount: { type: Number, required: true },
//   currency: { type: String, required: true },
//   paymentMethod: { type: String, required: true },
//   transactionID: { type: String, required: true },
//   status: {
//     type: String,
//     enum: ['pending', 'success', 'failed'],
//     default: 'pending',
//   },
//   booking: { type: Schema.Types.ObjectId, ref: 'Booking' },
//   invoice: { type: Schema.Types.ObjectId, ref: 'Invoice' },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// })

// const PaymentModel = model<IPayment>('Payment', paymentSchema)

// export { PaymentModel }
// export type { IPayment }
