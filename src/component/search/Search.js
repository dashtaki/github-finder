import {useState} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

// TODO: add spinner
//TODO rename repoQuery
const SEARCH_QUERY = gql`
    query repoSearch($userQuery: String!) {
      search(query: $userQuery, type: USER, first: 5) {
        edges {
          node {
            ... on User {
              id
              email
              name
              avatarUrl(size: 40)
            }
          }
        }
        userCount
      }
    }
`;

const Search = () => {
    const [searchedUser, setSearchedUser] = useState('');
    const [getSearchUserResult, {data}] = useLazyQuery(SEARCH_QUERY, {
        variables: {
            userQuery: searchedUser
        }
    });

    const onSearchUser = async (e) => {
        try {
            setSearchedUser(e.target.value);
            getSearchUserResult();
        } catch (error) {
            throw error;
        }
    }

    const userListView = () => {
        return (
            <>
                {data && data.search.edges.map((user) => (
                    <li key={user.node.id}>
                        <img width="40" src={user.node.avatarUrl} alt="user github avatar"/>
                        <small>{user.node.name}</small>
                    </li>
                ))}
            </>
        )
    }

    return <form>
        <div>
            <input type="text" name="username" onChange={onSearchUser}/>
            <input type="submit" value="Find"/>
        </div>
        <ul>{userListView()}</ul>
    </form>
}

export default Search;
