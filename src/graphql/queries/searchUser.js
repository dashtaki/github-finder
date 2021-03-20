import gql from 'graphql-tag';

export const SEARCH_USER_QUERY = gql`
    query userSearch($userQuery: String!) {
      search(query: $userQuery, type: USER, first: 10) {
        edges {
          node {
            ... on User {
              id
              login
              email
              name
              avatarUrl(size: 40)
              followers {
                totalCount
              }
              following {
                totalCount
              }
            }
          }
        }
        userCount
      }
    }
`;
