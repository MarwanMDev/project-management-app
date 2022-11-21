const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const bodyParser = require('body-parser');

require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(
  port,
  console.log(
    'Running a GraphQL API server at http://127.0.0.1:5000/graphql'
  )
);
