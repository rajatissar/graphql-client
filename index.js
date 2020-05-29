import { execute_query } from './src/graphql-request';

const find_user_query = `
query ($jwt: String, $user_id: String = "11"){
  find_user(token: $jwt, user_id: $user_id, is_authenticate: true) {
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
  user_id: '16'
}

execute_query(null, find_user_query, find_user_variable)