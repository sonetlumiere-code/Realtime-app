// import { connect, connection } from 'mongoose'

// export async function dbConnect() {
//   const url = process.env.MONGODB_URL
//   if (url) {
//     const db = await connect(url)
//     console.log(db.connections[0].readyState)
//   }
// }

// connection.on('connected', () => {
//   console.log('MongoDB connected')
// })

// connection.on('error', (err) => {
//   console.log(err)
// })

import { Redis } from '@upstash/redis'

export const db = new Redis({
  url: process.env.UPSTASH_REDIST_REST_URL || '',
  token: process.env.UPSTASH_REDIST_REST_TOKEN || ''
})
