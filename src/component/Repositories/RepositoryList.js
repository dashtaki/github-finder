import styled from 'styled-components';
import {
    faCodeBranch,
    faUser,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const RepositoryList = ({className, ...props}) => {
    const {repositories} = props;

    return (
        <ul className={className}>
            {repositories.map((node, index) => (
                <li key={index} className="repo__wrapper">
                    <a href={node.url} target="_blank">
                    <span className="repo__detail">
                        <FontAwesomeIcon icon={faUser}/>
                        <span className="repo__name">{node.name}</span>
                    </span>
                        <span className="repo__detail">
                        <FontAwesomeIcon icon={faCodeBranch}/>
                        <span>{node.forkCount}</span>
                    </span>
                        <span className="repo__detail">
                        <FontAwesomeIcon icon={faStar}/>
                            {node.stargazerCount}
                    </span>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default styled(RepositoryList)`
  padding: 0;

  li {
    list-style-type: none;
  }

  li a {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 5px;
    margin-bottom: 0.3rem;
    width: 100%;
    text-decoration: none;
    color: black;
  }

  .svg-inline--fa {
    font-size: 1rem;
    color: #c389b7;
  }

  .repo__detail {
    width: 15%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 200;
  }

  .repo__detail:first-child {
    display: flex;
    width: 60%;
    justify-content: flex-start;
  }

  .repo__name {
    font-weight: 600;
    padding-left: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
  }
`;
