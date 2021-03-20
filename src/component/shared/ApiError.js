import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDumpsterFire} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ApiError = ({className, ...props}) => {
    const {error} = props;
    console.log(error)

    return <h3 className={className}>
        <FontAwesomeIcon icon={faDumpsterFire}/>
        <span>{error.message}</span>
    </h3>
}

export default styled(ApiError)`
  margin-top: 10%;
  color: red;
  z-index: 1;

  span {
    margin-left: 1rem;
  }
`;
