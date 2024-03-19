import mongoose from 'mongoose'

export async function dbConnection() {
  await mongoose.connect(process.env.MONGODB_URI)

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
