module.exports = {
  Query: {
    // forms: (_, __, { db }) => {
    //   return db.forms()
    // },
    _report: (_, { claimId }, { db }) => {
      return db.report({ claimId })
    }
  }
}