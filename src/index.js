const { ApolloServer } = require('apollo-server')
const schema = require('./schema')
const context = require('./context')

const { SERVICE_PORT } = require('./configs')

const server = new ApolloServer({ schema, context })

server
  .listen(SERVICE_PORT)
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
    console.log(`🚀  Health check at ${url}.well-known/apollo/server-health`)
  })