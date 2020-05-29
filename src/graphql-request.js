import _ from 'lodash';
import { GraphQLClient } from 'graphql-request';

global.fetch = require("node-fetch");

const get_graphql_client = () => {
  const client = new GraphQLClient('http://localhost:4001/graphql', {
    headers: {
      authorization: `Bearer ${process.env.token}`,
    }
  });
  return client;
}

const execute_query = async (logging_key, query, variables) => {
  try {
    const client = get_graphql_client();
    const data = await client.request(query, variables);
    console.log(`${logging_key} - data = ${JSON.stringify(data)}`);
    const token = _.get(data, 'login_user.token', null);
    if (token) {
      process.env.token = token
    }
  } catch (error) {
    console.log(`${logging_key} - error_message = ${error.message}`);
    console.log(error.stack);
  }
}

export { execute_query }
