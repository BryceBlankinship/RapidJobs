import { ApolloServer, gql } from "apollo-server-express";
import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect("mongodb://", { useNewUrlParser: true });

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian "});
kitty.save().then(() => console.log("meow"));

const typeDefs = gql`
    type Query {
        hello: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => "hello"
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.start().then(res => {
    server.applyMiddleware({ app });
});

app.listen({ port: 4000 }, () => {
    console.log("Server ready at http://localhost:4000");
});

