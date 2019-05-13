import styled from 'styled-components';


export const HomeStyles = styled.div`
    min-height: 150vh;

    img {
        width: 100vw;
    }
    .chicken {
        position: absolute;
        top: 200px;
    }
    .sauce {
        position: absolute;
        top: 300px;
        z-index: 5;

        h2 {
            color: white;
            font-size: 1rem;
            margin: 5vh 15px;
            text-align: right;
            text-shadow: 2px 2px 0 #333;
        }
    }
    .tabletop {
        background-size: 100vw;
        height: 85vh;
        position: relative;
        top: 190px;

        h3 {
            color: white;
            font-size: 1rem;
            margin: 0 15px;
            padding-top: 40vh;
            text-align: center;
            text-shadow: 2px 2px 0 #333;
        }
    }
    .drink {
        position: absolute;
        top: 800px;
        z-index: 5;
    }
    @media only screen and (min-width: 400px){
        .chicken {
            top: 150px;
        }
        .sauce {
            top: 200px;
            
            h2 {
                font-size: 2rem;
                margin: 10vh 12.5%;
            }
        }
        .tabletop {
            top: 375px;

            h3 {
                font-size: 2rem;
                margin: 0 12.5%;
                padding-top: 40vh;
            }
        }
        .drink {
            top: 900px;
        }
    }
    @media only screen and (min-width: 768px){
        .tabletop {
            height: 150vh;
            top: 1000px;

            h3 {
                font-size: 4rem;
                margin: 0 25%;
                padding-top: 70vh;
            }
        }
        .sauce {
            h2 {
                font-size: 3rem;
                margin: 20vh 25%;
            }
        }
        .drink {
            top: 2000px;
        }
    }
`;