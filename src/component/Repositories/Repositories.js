import {useState, useEffect} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

// TODO: isFork
// TODO: back button

const SEARCH_REPO_QUERY = gql`
    query userRepos($username: String!) {
      user(login: $username) {
        repositories(first: 100, isFork: false) {
          nodes {
            name
            url
            forkCount
            stargazerCount
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
`;

export const TodoPrivateListQuery = ({...props}) => {
    const {username} = props.match.params
    const [repositoriesPagination, setRepositoriesPagination] = useState(null);

    const [getUserRepositories, {loading, error, data}] = useLazyQuery(SEARCH_REPO_QUERY, {
        // onCompleted: data => {
        //     console.log(data && data.user.repositories.pageInfo.endCursor)
        // },
        variables: {
            username: username,
            after: repositoriesPagination
        }
    })

    useEffect(() => getUserRepositories(), [data])

    const backToSearch = () => {
        /**
         * Use 'push' instead of goBack() to work properly
         * even when you open a specific station in address bar directly
         */
        props.history.push('/search')
    }

    const backButton = <a onClick={backToSearch}>Back to search</a>

    if (loading || !data) return <div>Loading...</div>

    if (error) return [backButton, <div>Error!</div>]

    return [backButton, <RepositoryList repos={data}/>];
};


const RepositoryList = ({...props}) => {
    const {nodes, pageInfo} = props.repos.user.repositories;

    if (!nodes.length) return <h3>User does not have any repository!</h3>

    return (
        <>
            <ul>
                {
                    nodes.map((node, index) => (
                        <li key={index}>
                            Forks: {node.forkCount}
                            Name: {node.name}
                            Starts: {node.stargazerCount}
                            <a href={node.url} target='_blank'>Link</a>
                        </li>
                    ))
                }
            </ul>
            <div>
                {pageInfo.hasPreviousPage && <span> Prev </span>}
                {pageInfo.hasNextPage && <span> Next </span>}
            </div>
        </>
    )
}
