//const { mainCards, animals,categories } = require('../db')
    const Query = {
        books: () => books,
        mainCards: () => mainCards,
        animals: () => animals,
        animal: (parent,args,{animals})=> {
            let animal = animals.find( data => data.slug === args.slug)
            return animal
        },
        categories: () => categories,
        category: (parent,args,{categories}) => {
          let category = categories.find((category) => {
            return category.slug === args.slug
          })
          return category
        },
    }

    module.exports = Query