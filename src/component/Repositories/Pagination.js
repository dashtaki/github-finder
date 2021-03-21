import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Pagination = ({className, ...props}) => {
    const {pageInfo, handleOnNext, handleOnPrevious} = props;

    const isOnePage = (!pageInfo.hasNextPage && !pageInfo.hasPreviousPage);

    return (
        !isOnePage && <div className={className + ' pagination'}>
            <button disabled={!pageInfo.hasPreviousPage} onClick={handleOnPrevious}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <button disabled={!pageInfo.hasNextPage} onClick={handleOnNext}>
                <FontAwesomeIcon icon={faChevronRight}/></button>
        </div>
    )
}

export default styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: transparent;
    border: 0;
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  button:enabled .svg-inline--fa {
    color: #1301ff
  }

  button:enabled:hover {
    background-color: whitesmoke;
  }
`;
