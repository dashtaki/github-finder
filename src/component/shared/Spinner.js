import styled from 'styled-components';

const Spinner = ({ className }) => {
    return (
        <>
            <div className={className + ' spinner'}>
                <div className="cssload-cube cssload-c1"></div>
                <div className="cssload-cube cssload-c2"></div>
                <div className="cssload-cube cssload-c4"></div>
                <div className="cssload-cube cssload-c3"></div>
            </div>
        </>
    );
};

export default styled(Spinner)`
    width: 50px;
    height: 50px;
    margin: 0 auto;
    margin-top: 10rem;
    position: relative;

    .cssload-cube {
        position: relative;
        float: left;
        width: 50%;
        height: 50%;
        transform: scale(1.1);
        -o-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
    }

    .cssload-cube:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #2ba0c7;
        animation: cssload-fold-thecube 2.76s infinite linear both;
        -o-animation: cssload-fold-thecube 2.76s infinite linear both;
        -webkit-animation: cssload-fold-thecube 2.76s infinite linear both;
        -moz-animation: cssload-fold-thecube 2.76s infinite linear both;
        transform-origin: 100% 100%;
        -o-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
        -webkit-transform-origin: 100% 100%;
        -moz-transform-origin: 100% 100%;
    }

    .cssload-thecube .cssload-cube.cssload-c1:before {
        background-size: contain;
    }

    .cssload-cube.cssload-c2 {
        transform: scale(1.1) rotateZ(90deg);
        -o-transform: scale(1.1) rotateZ(90deg);
        -ms-transform: scale(1.1) rotateZ(90deg);
        -webkit-transform: scale(1.1) rotateZ(90deg);
        -moz-transform: scale(1.1) rotateZ(90deg);
    }

    .cssload-cube.cssload-c2:before {
        animation-delay: 0.35s;
        -o-animation-delay: 0.35s;
        -webkit-animation-delay: 0.35s;
        -moz-animation-delay: 0.35s;
        background-size: contain;
    }

    .cssload-cube.cssload-c3 {
        transform: scale(1.1) rotateZ(180deg);
        -o-transform: scale(1.1) rotateZ(180deg);
        -ms-transform: scale(1.1) rotateZ(180deg);
        -webkit-transform: scale(1.1) rotateZ(180deg);
        -moz-transform: scale(1.1) rotateZ(180deg);
    }

    .cssload-cube.cssload-c3:before {
        animation-delay: 0.69s;
        -o-animation-delay: 0.69s;
        -webkit-animation-delay: 0.69s;
        -moz-animation-delay: 0.69s;
        background-size: contain;
    }

    .cssload-cube.cssload-c4 {
        transform: scale(1.1) rotateZ(270deg);
        -o-transform: scale(1.1) rotateZ(270deg);
        -ms-transform: scale(1.1) rotateZ(270deg);
        -webkit-transform: scale(1.1) rotateZ(270deg);
        -moz-transform: scale(1.1) rotateZ(270deg);
    }

    .cssload-cube.cssload-c4:before {
        animation-delay: 1.04s;
        -o-animation-delay: 1.04s;
        -webkit-animation-delay: 1.04s;
        -moz-animation-delay: 1.04s;
        background-size: contain;
    }

    @keyframes cssload-fold-thecube {
        0%,
        10% {
            transform: perspective(136px) rotateX(-180deg);
            opacity: 0;
        }
        25%,
        75% {
            transform: perspective(136px) rotateX(0deg);
            opacity: 1;
        }
        90%,
        100% {
            transform: perspective(136px) rotateY(180deg);
            opacity: 0;
        }
    }
    @-o-keyframes cssload-fold-thecube {
        0%,
        10% {
            -o-transform: perspective(136px) rotateX(-180deg);
            opacity: 0;
        }
        25%,
        75% {
            -o-transform: perspective(136px) rotateX(0deg);
            opacity: 1;
        }
        90%,
        100% {
            -o-transform: perspective(136px) rotateY(180deg);
            opacity: 0;
        }
    }
    @-ms-keyframes cssload-fold-thecube {
        0%,
        10% {
            -ms-transform: perspective(136px) rotateX(-180deg);
            opacity: 0;
        }
        25%,
        75% {
            -ms-transform: perspective(136px) rotateX(0deg);
            opacity: 1;
        }
        90%,
        100% {
            -ms-transform: perspective(136px) rotateY(180deg);
            opacity: 0;
        }
    }
    @-webkit-keyframes cssload-fold-thecube {
        0%,
        10% {
            -webkit-transform: perspective(136px) rotateX(-180deg);
            opacity: 0;
        }
        25%,
        75% {
            -webkit-transform: perspective(136px) rotateX(0deg);
            opacity: 1;
        }
        90%,
        100% {
            -webkit-transform: perspective(136px) rotateY(180deg);
            opacity: 0;
        }
    }
    @-moz-keyframes cssload-fold-thecube {
        0%,
        10% {
            -moz-transform: perspective(136px) rotateX(-180deg);
            opacity: 0;
        }
        25%,
        75% {
            -moz-transform: perspective(136px) rotateX(0deg);
            opacity: 1;
        }
        90%,
        100% {
            -moz-transform: perspective(136px) rotateY(180deg);
            opacity: 0;
        }
    }
`;
