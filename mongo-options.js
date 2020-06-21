import { Mongo } from 'meteor/mongo'

if (process.env.MONGO_CONNECTION_OPTIONS) {
  const mongoOpts = JSON.parse(process.env.MONGO_CONNECTION_OPTIONS)
  Mongo.setConnectionOptions(mongoOpts)
}
