const { ApolloServer, gql } = require('apollo-server')
const { books, mainCards, animals } = require('./db')
// Define Graphql schema
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type MainCard {
    title: String
    image: String
  }
  type Animal {
      id:ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String]!
    stock: Int!
    onSale: Boolean
    slug: String!
    category: String!
  }

  type Query {
    books: [Book],
    mainCards: [MainCard],
    animals: [Animal!]!,
    animal(slug: String!): Animal,
  }
`;

// Define the data set


// Define resolvers
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        books: () => books,
        mainCards: () => mainCards,
        animals: () => animals,
        animal: (parent,args,ctx)=> {
            let animal = animals.find( data => data.slug === args.slug)
            return animal
        }
    },
};

// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});



