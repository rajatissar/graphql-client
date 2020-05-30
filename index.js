import { execute_query } from './src/graphql-request';

const login_user_mutation =
  `
mutation ($user_email: String!, $password: String!){
  login_user(user_email: $user_email, user_password: $password) {
    user_id
    user_email
    token
  }
}
`;

const login_user_variable = {
  user_email: 'rajat.kumar@daffodilsw.com',
  password: 'a'
};

const find_user_query =
  `
query ($jwt: String, $user_id: String = "11", $is_authenticate: Boolean = false, $is_db: Boolean){
  find_user(token: $jwt, user_id: $user_id, is_authenticate: $is_authenticate, is_db: $is_db) {
    user_id
    user_email
    user_name {
      first
      last
    }
    status
    friends(limit: 2){
     user_id 
     user_email
    }
  }
}
`;

const find_user_variable = {
  user_id: '16',
  is_authenticate: false,
  is_db: false
};


async function executed_graphql_query() {
  await execute_query(null, login_user_mutation, login_user_variable);
  await execute_query(null, find_user_query, find_user_variable);
};

executed_graphql_query();
