import {useState} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import {useHistory} from 'react-router-dom';
import SearchInput from './SearchInput';
import UsersList from './UsersList';
import styled from 'styled-components';
import {SEARCH_USER_QUERY} from '../../graphql/queries/searchUser';
import ApiError from '../shared/ApiError'

const Search = ({className}) => {
    // TODO; keep searched user in redux
    const [searchedUser, setSearchedUser] = useState('');
    const [selectedUser, setSelectedUser] = useState({});
    const history = useHistory()

    const [searchUsersByGithubId, {data, loading, error}] = useLazyQuery(SEARCH_USER_QUERY, {
        variables: {
            userQuery: searchedUser
        }
    });

    const onSearchUser = async (event) => {
        try {
            setSearchedUser(event.target.value);
            searchUsersByGithubId();
        } catch (error) {
            throw error;
        }
    }

    const seeUserRepositories = () => history.push(`/repositories/${selectedUser.login}`)

    const onUserClick = (user) => setSelectedUser(user);

    const formSubmit = (event) => {
        event.preventDefault();
        seeUserRepositories();
    }

    return <form onSubmit={formSubmit} className={className}>
        <SearchInput name={selectedUser.name} handleOnChange={onSearchUser}/>
        {
            error
                ? <ApiError error={error}/>
                : <UsersList users={data} handleOnUserClick={onUserClick} loading={loading} searchTerm={searchedUser}/>}
    </form>
}

export default styled(Search)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;
