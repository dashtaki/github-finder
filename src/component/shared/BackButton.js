import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const BackButton = ({ className }) => {
    const history = useHistory();

    const backToSearch = () => history.push('/search');

    return (
        <button onClick={backToSearch} className={className + ' back-button'}>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
        </button>
    );
};

export default styled(BackButton)`
    font-size: 3rem;
    background-color: transparent;
    border: 0;
    color: blue;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;
