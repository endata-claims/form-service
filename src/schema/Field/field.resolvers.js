module.exports = {
  Card: {
    fields: async (root, __, { db }) => {
      const fields = await db.formCard({ id: root.id }).card().fields()

      const formCardFields = await Promise.all(fields.map(async field => {
        const d = await db.cardField({ id: field.id }).field()
        delete d.id

        return {
          ...d,
          ...field
        }
      }))

      return formCardFields
    }
  },
  Field: {
    __resolveType(root) {
      if(root.type) return root.type
    },
  },
  SelectField: {
    options: async (root, __, { db }) => {
      return db.cardField({ id: root.id }).field().options()
    }
  },
  GroupField: {
    fields: async (root, __, { db }) => {
      const fields = await db.cardField({ id: root.id }).field().groupFields()
      const formCardFields = await fields.map(async field => {
        const d = await db.cardField({ id: field.id }).field()
        delete d.id

        return {
          ...d,
          ...field
        }
      })

      return formCardFields
    }
  }
}