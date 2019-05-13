import styled from 'styled-components';


export const HomeStyles = styled.div`
    min-height: 150vh;

    img {
        width: 100vw;
    }
    .chicken {
        position: absolute;
        top: 150px;
        z-index: 1;
    }
    .drink {
        position: relative;
        top: 150vw;
    }
    .sauce {
        position: absolute;
        top: 200px;
        z-index: 5;

        h3 {
            color: white;
            font-size: 1rem;
            margin: 5vh 15px;
            text-align: right;
            text-shadow: 2px 2px 0 #333;
        }
    }
    @media only screen and (min-width: 400px){
        .sauce {
            h3 {
                font-size: 2rem;
                margin: 10vh 12.5%;
            }
        }
    }
    @media only screen and (min-width: 768px){
        .sauce {
            h3 {
                font-size: 3rem;
                margin: 20vh 25%;
            }
        }
    }
`;