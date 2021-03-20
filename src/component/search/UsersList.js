import Spinner from '../shared/Spinner';
import styled from 'styled-components';

const UsersList = ({className, ...props}) => {
    const {users, handleOnUserClick, loading, searchTerm} = props;

    if (loading) return <Spinner/>

    const userNotFound = !loading && !users?.search.edges.length && searchTerm;
    if (userNotFound)
        return <div className={className}><h1 className="user-not-found__text">No Users found!</h1></div>

    return <ul className={className}>
        {users && users.search.edges.map((user) => (
            <li key={user.node.id} onClick={() => handleOnUserClick(user.node)}>
                <img width="40" src={user.node.avatarUrl} alt="user github avatar"/>

                <div className="user-detail__wrapper">
                    <small className="user-detail__name">{user.node.name || 'No Name'}</small>
                    <small>Followers: {user.node.followers.totalCount} </small>
                    <small>Following: {user.node.following.totalCount}</small>
                </div>
            </li>
        ))}
    </ul>
}

export default styled(UsersList)`
  padding: 0;
  z-index: 1;
  margin-top: 3%;

  li {
    display: flex;
    justify-content: space-between;
    background-color: #ebf1eb;
    margin-bottom: 0.2rem;
    align-items: center;
    padding: .5rem 1rem .5rem .5rem;
    border-radius: 5px;
    width: 20rem;
  }

  li:hover {
    cursor: pointer;
  }

  li img {
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  .user-not-found__text {
    margin-top: 8rem;
  }

  .user-detail__wrapper {
    text-align: right;
  }

  .user-detail__name {
    display: block;
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
`;
