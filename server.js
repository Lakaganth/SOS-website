const express = require("express");
const cors = require("cors");

// Connection to Mongo DB
const connectDB = require("./config/db");

//GraphQL
const graphqlHTTP = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");

const app = express();

// Allow cross origin

app.use(cors());

app.use(express.json({ extended: false }));

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
  })
);

//PORT Config

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
