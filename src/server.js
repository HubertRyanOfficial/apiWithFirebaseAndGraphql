const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = 3000;

server.listen(PORT).then(() => {
  console.log(`🚀 Server ready!`);
});
