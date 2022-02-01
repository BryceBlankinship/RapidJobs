import { ApolloServer, gql } from "apollo-server-express";
import express from 'express';
import mongoose from 'mongoose';

const User = mongoose.model("User", { name: String });

const typeDefs = gql`
    type Query {
        users: [User!]!
    }

    type User{
        id: ID!
        name: String!
    }

    type Mutation{
        createUser(email: String!, name: String!, password: String!): User!
    }
`;

const resolvers = {
    Query: {
        users: () => User.find()
    },
    Mutation: {
        createUser: async (_, {name}) => {
            const user = new User({ name });
            await user.save();
            return user;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    await server.start();
    server.applyMiddleware({ app });

    await mongoose.connect("mongodb+srv://bryce:Soccer6611like321@rapidjobsserverless.uitzv.mongodb.net/usersDB?retryWrites=true&w=majority", { useNewUrlParser: true });

    app.listen({ port: 4000 }, () => {
        console.log(`Server started on http://localhost:4000${server.graphqlPath}`);
    });
}

startServer();