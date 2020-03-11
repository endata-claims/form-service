module.exports = {
  Query: {
    // forms: (_, __, { db }) => {
    //   return db.forms()
    // },
    _form: (_, { id }, { db }) => {
      return db.form({ id })
    }
  }
}