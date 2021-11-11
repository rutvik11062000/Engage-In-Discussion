const { ApolloServer } = require("apollo-server");
const { gql } = require('graphql-tag')
require('dotenv').config();

const typeDefs = gql`
    type Query{
        hello: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    }
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen({port: process.env.PORT})
.then(res => console.log(`server is running at ${res.url} 🚀`))