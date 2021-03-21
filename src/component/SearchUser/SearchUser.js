import {useEffect, useState} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import {useHistory} from 'react-router-dom';
import SearchInput from './SearchInput';
import UsersList from './UsersList';
import styled from 'styled-components';
import {SEARCH_USER_QUERY} from '../../graphql/queries/searchUser';
import ApiError from '../shared/ApiError'
import {connect} from 'react-redux';
import {setSearchResult, setSelectedUser} from '../../store/actions/userSearch.action';

const SearchUser = ({className, ...props}) => {
    const [searchedUser, setSearchedUser] = useState('');
    const [selectedUser, setSelectedUser] = useState({});
    const [searchResult, setSearchResult] = useState(null);
    const history = useHistory()

    const [searchUsersByGithubId, {loading, error}] = useLazyQuery(SEARCH_USER_QUERY, {
        onCompleted: result => {
            setSearchResult(result);
            props.setUserSearchResult(result);
        },
        variables: {
            userQuery: searchedUser
        }
    });

    const checkStateForUserSearchHistory = () => {
        if (props.selectedUser) setSelectedUser(props.selectedUser);
        if (props.searchResult) setSearchResult(props.searchResult);
    }

    useEffect(() => checkStateForUserSearchHistory(), [])

    const onSearchUser = async (event) => {
        try {
            setSearchedUser(event.target.value);
            searchUsersByGithubId();
        } catch (error) {
            throw error;
        }
    }

    const seeUserRepositories = () => history.push(`/repositories/${selectedUser.login}`)

    const onUserClick = (user) => {
        setSelectedUser(user);
        props.setSelectedUser(user)
    };

    const formSubmit = (event) => {
        event.preventDefault();
        seeUserRepositories();
    }

    return <form onSubmit={formSubmit} className={className}>
        <SearchInput name={selectedUser.name} handleOnChange={onSearchUser}/>
        {
            error
                ? <ApiError error={error}/>
                : <UsersList users={searchResult} handleOnUserClick={onUserClick} loading={loading}
                             searchTerm={searchedUser}/>}
    </form>
}

const styledComponent = styled(SearchUser)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const mapStateToProps = (state) => ({
    selectedUser: state.selectedUser,
    searchResult: state.searchResult
})

const mapDispatchToProps = (dispatch) => ({
    setSelectedUser: (selectedUser) => dispatch(setSelectedUser(selectedUser)),
    setUserSearchResult: (searchResult) => dispatch(setSearchResult(searchResult)),
});

export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
