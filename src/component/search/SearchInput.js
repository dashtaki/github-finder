import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SearchInput = ({className, ...props}) => {
    const {name, handleOnChange} = props;

    return <div className={className}>
        <input type="text" name="username" id="search-input" placeholder="Search" value={name}
               onChange={handleOnChange}/>
        <section id="search-background"></section>
        <button type="submit" value="Find" disabled={!name}>
            <FontAwesomeIcon icon={faSearch}/>
        </button>
    </div>
}

export default styled(SearchInput)`
  #search-input {
    padding: 0 2.2rem;
    position: absolute;
    z-index: 2;
    top: 5%;
    left: 50%;
    height: 2.5rem;
    border-radius: 3rem;
    border: 1px solid lightgray;
    width: 10rem;
    font-size: 1rem;
    transform: translateX(-50%);
  }

  #search-input:focus {
    outline: none;
  }

  #search-input:focus + #search-background {
    display: block;
    -webkit-animation: fadeIn 1s 1;
    -moz-animation: fadeIn 1s 1;
    -o-animation: fadeIn 1s 1;
    animation: fadeIn 1s 1;
    position: fixed;
    top: 0;
    left: 0;
  }

  #search-input:not(:focus) + #search-background {
    -webkit-animation: fadeOut 1s 1;
    -moz-animation: fadeOut 1s 1;
    -o-animation: fadeOut 1s 1;
    animation: fadeOut 1s 1;
  }

  button[type=submit] {
    z-index: 2;
    position: absolute;
    top: 5%;
    left: 57%;
    background-color: transparent;
    border: 0;
    margin-top: .6rem;
    margin-right: 6rem;
    width: 30px;
    font-size: 1.2rem;
  }

  button[type=submit]:enabled {
    color: blue;
  }

  #search-background {
    background: -moz-linear-gradient(306deg, navy 0%, teal 45%, teal 67%);
    /* ff3.6+ */
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, navy), color-stop(45%, teal), color-stop(67%, teal));
    /* safari4+,chrome */
    background: -webkit-linear-gradient(306deg, navy 0%, teal 45%, teal 67%);
    /* safari5.1+,chrome10+ */
    background: -o-linear-gradient(306deg, navy 0%, teal 45%, teal 67%);
    /* opera 11.10+ */
    background: -ms-linear-gradient(306deg, navy 0%, teal 45%, teal 67%);
    /* ie10+ */
    background: linear-gradient(144deg, navy 0%, teal 45%, teal 67%);
    /* w3c */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000080", endColorstr="#008080",GradientType=0);
    /* ie6-9 */
    height: 100%;
    width: 100%;
    position: absolute;
    display: none;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

