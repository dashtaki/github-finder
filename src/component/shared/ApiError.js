import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumpsterFire } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ApiError = ({ className, ...props }) => {
    const { error } = props;

    return (
        <h3 className={className + ' api-error__wrapper'}>
            <FontAwesomeIcon icon={faDumpsterFire} />
            <span>{error.message}</span>
        </h3>
    );
};

export default styled(ApiError)`
    margin-top: 10%;
    color: red;
    z-index: 1;

    span {
        margin-left: 1rem;
    }
`;
