import { Schema, model } from 'mongoose'

interface INotification {
  user: Schema.Types.ObjectId
  type: string
  message: string
  isRead: boolean
  createdAt?: Date
  updatedAt?: Date
}

const notificationSchema = new Schema<INotification>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const NotificationModel = model<INotification>(
  'Notification',
  notificationSchema
)

export { NotificationModel }
export type { INotification }
