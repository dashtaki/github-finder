import styled from 'styled-components';
import {faCodeBranch, faUser, faStar, faExternalLinkSquareAlt,} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const RepositoryList = ({className, ...props}) => {
    const {repositories} = props;

    return <ul className={className}>
        {
            repositories.map((node, index) => (
                <li key={index} className="repo__wrapper">
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
                    <span className="repo__detail">
                       <a href={node.url} target='_blank'><FontAwesomeIcon icon={faExternalLinkSquareAlt}/></a>
                    </span>
                </li>
            ))
        }
    </ul>
}

export default styled(RepositoryList)`
  padding: 0;

  .repo__wrapper {
    padding: 1rem;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 5px;
    margin-bottom: 0.3rem;
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

  .repo__detail:last-child {
    width: 10%;
    .svg-inline--fa {
      color: blue;
    }
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
