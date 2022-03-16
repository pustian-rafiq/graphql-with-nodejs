const { ApolloServer, gql } = require('apollo-server')
const { books,mainCards, animals,categories } = require('./db')
const typeDefs = require('./schema')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Category = require('./resolvers/Category')
const Animal = require('./resolvers/Animal')
// Define Graphql schema


// Define the data set


// Define resolvers

 

// Create an instance of ApolloServer
const server = new ApolloServer(
  { 
    typeDefs,
     resolvers:{
       Query,
       Mutation,
       Category,
       Animal
     },
     context:{
      books,
       mainCards,
       animals,
       categories
     }
     }
  );

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});



