import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';


const Pagination = ({className, ...props}) => {
    const {pageInfo, handleOnNext, handleOnPrevious} = props;

    return <div className={className}>
        <button disabled={!pageInfo.hasPreviousPage} onClick={handleOnPrevious}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
        <button disabled={!pageInfo.hasNextPage} onClick={handleOnNext}>
            <FontAwesomeIcon icon={faChevronRight}/></button>
    </div>
}

export default styled(Pagination)`
    
`;
