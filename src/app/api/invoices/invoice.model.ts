// import { Schema, model } from 'mongoose'

// interface IInvoiceItem {
//   type: string
//   description: string
//   amount: number
// }

// interface IInvoice {
//   user: Schema.Types.ObjectId
//   items: IInvoiceItem[]
//   totalAmount: number
//   currency: string
//   status: string
//   dueDate: Date
//   createdAt?: Date
//   updatedAt?: Date
// }

// const invoiceSchema = new Schema<IInvoice>({
//   user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   items: [
//     {
//       type: { type: String, required: true },
//       description: { type: String, required: true },
//       amount: { type: Number, required: true },
//     },
//   ],
//   totalAmount: { type: Number, required: true },
//   currency: { type: String, required: true },
//   status: { type: String, enum: ['paid', 'pending'], default: 'pending' },
//   dueDate: { type: Date, required: true },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// })

// const InvoiceModel = model<IInvoice>('Invoice', invoiceSchema)

// export { InvoiceModel }
// export type { IInvoice }
