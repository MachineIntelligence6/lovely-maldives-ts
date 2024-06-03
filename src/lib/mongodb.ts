// /* eslint-disable no-underscore-dangle */
// /* eslint-disable import/no-mutable-exports */

// import { MongoClient } from 'mongodb'

// const uri = process.env.MONGODB_URI
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// }

// let client
// let clientPromise

// if (!process.env.MONGODB_URI) {
//   throw new Error('Add Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri as any, options as any)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   client = new MongoClient(uri as any, options as any)
//   clientPromise = client.connect()
// }

// export default clientPromise
