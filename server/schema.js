const {gql } = require('apollo-server')

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
  category: Category
}
type Category {
id: ID!
image: String!
category: String!
slug: String!
animals: [Animal!]!
}
type Query {
  books: [Book],
  mainCards: [MainCard],
  animals: [Animal!]!,
  animal(slug: String!): Animal,
  categories: [Category!]!,
  category(slug: String!): Category,
}
`;
module.exports = typeDefs