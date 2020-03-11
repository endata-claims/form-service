module.exports = {
  Form: {
    cards: async (root, __, { db }) => {
      const cards = await db.form({ id: root.id }).cards()

      const formCards = await Promise.all(cards.map(async card => {
        const d = await db.formCard({ id: card.id }).card()
        delete d.id

        return {
          ...d,
          ...card
        }
      }))

      return formCards
    }
  }
}