import {useState, useEffect} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const SEARCH_REPO_QUERY = gql`
    query userRepos($username: String!, $after: String, $before: String, $first: Int, $last: Int) {
      user(login: $username) {
        repositories(first: $first, after: $after, before: $before, isFork: false, last: $last) {
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

export const Repositories = ({...props}) => {
    const {username} = props.match.params
    const {history} = props;
    const [endCursor, setEndCursor] = useState(null);
    const [startCursor, setStartCursor] = useState(null);
    const [variables, setVariables] = useState({username, first: 20});

    const setCursors = (queryResult) => {
        if (!queryResult) return;

        setEndCursor(queryResult.user.repositories.pageInfo.endCursor)
        setStartCursor(queryResult.user.repositories.pageInfo.startCursor)
    }

    const [getUserRepositories, {loading, error, data}] = useLazyQuery(SEARCH_REPO_QUERY, {
        onCompleted: result => setCursors(result),
        fetchPolicy: 'network-only',
        variables: variables
    })

    useEffect(() => getUserRepositories(), [])

    const backToSearch = () => {
        /**
         * Use 'push' instead of goBack() to work properly
         * even when you open a specific station in address bar directly
         */
        history.push('/search')
    }

    const backButton = () => <button onClick={backToSearch}>Back to search</button>

    if (loading || !data) return <div>Loading...</div>

    if (error) return [backButton(), <div>Error!</div>]

    const onNext = () => {
        const nextPageVariables = {username, first: 20, after: endCursor}
        setVariables(nextPageVariables);
    }

    const onPrevious = () => {
        const nextPageVariables = {username, last: 20, before: startCursor}
        setVariables(nextPageVariables);
    }

    const userHasNoRepositories = () => {
        return !data.user || !data.user.repositories.nodes.length
    }

    return (
        <>
            {userHasNoRepositories() ? <h3>User does not have any repository!</h3> :
                <>
                    {backButton()}
                    <ul>
                        {
                            data.user.repositories.nodes.map((node, index) => (
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
                        <button disabled={!data.user.repositories.pageInfo.hasPreviousPage} onClick={onPrevious}> Prev
                        </button>
                        <button disabled={!data.user.repositories.pageInfo.hasNextPage} onClick={onNext}> Next</button>
                    </div>
                </>
            }
        </>
    )
};
