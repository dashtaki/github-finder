import {useState} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {useHistory} from "react-router-dom";

// TODO: add spinner
// TODO: handle nothing found!

const SEARCH_USER_QUERY = gql`
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
            }
          }
        }
        userCount
      }
    }
`;

const Search = () => {
    // TODO; keep searched user in redux
    // TODO: pass input value directly to the query and remove it
    const [searchedUser, setSearchedUser] = useState('');
    const [selectedUser, setSelectedUser] = useState({});
    const history = useHistory()

    // TODO: rename getSearchUserResult
    const [getSearchUserResult, {data}] = useLazyQuery(SEARCH_USER_QUERY, {
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

    const seeUserRepositories = () => {
        history.push(`/repositories/${selectedUser.login}`);
    }

    const onUserClick = (user) => {
        setSelectedUser(user);
    }

    const userListView = () => {
        return (
            <>
                {data && data.search.edges.map((user) => (
                    <li key={user.node.id} onClick={() => onUserClick(user.node)}>
                        <img width="40" src={user.node.avatarUrl} alt="user github avatar"/>
                        <small>{user.node.name}</small>
                    </li>
                ))}
            </>
        )
    }

    return <form onSubmit={event => {
        event.preventDefault();
        seeUserRepositories();
    }}>
        <div>
            <input type="text" name="username" value={selectedUser.name} onChange={onSearchUser}/>
            <input type="submit" value="Find" disabled={!selectedUser.name}/>
        </div>
        <ul>{userListView()}</ul>
    </form>
}

export default Search;
