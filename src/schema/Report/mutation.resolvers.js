module.exports = {
  Mutation: {
    claimReportUpsert: async (_, { claimId, data }, { db }) => {
      const report = await db.report({ claimId })
      if (report.status === 'REPORTED') return null

      return db.upsertReport({
        create: { claimId, data },

        where: { claimId },
        update: { data }
      })
    },
    claimReportSubmit: (_, { claimId }, { db }) => {
      return db.updateReport({
        where: { claimId },
        data: { status: 'REPORTED' }
      })
    },
    claimReportReset: (_, { claimId }, { db }) => {
      return db.updateReport({
        where: { claimId },
        data: { status: 'REPORTING' }
      })
    },
  }
}