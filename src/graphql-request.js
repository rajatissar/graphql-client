import { request, GraphQLClient } from 'graphql-request';
global.fetch = require("node-fetch");

const get_graphql_client = () => {
  const client = new GraphQLClient('http://localhost:4001/graphql', {
    headers: {}
  });
  return client;
}

const execute_query = async (logging_key, query, variables) => {
  try {
    const client = get_graphql_client();
    const data = await client.request(query, variables);
    console.log(`${logging_key} - data = ${JSON.stringify(data)}`);
  } catch (error) {
    console.log(`${logging_key} - error_message = ${error.message}`);
    console.log(error.stack);
  }
}

export { execute_query }
