import gql from 'graphql-tag';

export const SEARCH_REPO_QUERY = gql`
    query userRepos(
        $username: String!
        $after: String
        $before: String
        $first: Int
        $last: Int
    ) {
        user(login: $username) {
            repositories(
                first: $first
                after: $after
                before: $before
                isFork: false
                last: $last
            ) {
                nodes {
                    name
                    url
                    forkCount
                    stargazerCount
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                    hasPreviousPage
                }
            }
        }
    }
`;
