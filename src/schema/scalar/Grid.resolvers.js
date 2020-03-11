const { GraphQLScalarType, GraphQLError } = require('graphql')

module.exports = {
  Grid: new GraphQLScalarType({
    name: 'Grid',
    description: 'Control grid, value from 1 to 12',
    parseValue(value) {
      return validate(value)
    },
    serialize(value) {
      return validate(value)
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.INT) {
        throw new GraphQLError('Grid value should be an integer')
      }

      return validate(value)
    },
  })
}

const validate = value => {
  const v = parseInt(value)

  if (v > 12 || v < 1) {
    throw new GraphQLError('Grid value should be in range [1, 12]')
  }

  return v
}