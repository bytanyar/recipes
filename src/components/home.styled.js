import styled from 'styled-components';


export const HomeStyles = styled.div`
    min-height: 150vh;

    img {
        width: 100vw;
    }
    .chicken {
        position: absolute;
        top: 140px;
    }
    .sauce {
        position: absolute;
        z-index: 5;

        h2 {
            color: white;
            font-size: 2rem;
            margin: 0 15px;
            padding-bottom: 5vh;
            text-align: right;
            text-shadow: 2px 2px 0 #333;
        }
    }
    .tabletop {
        background-size: 100vw;
        height: 85vh;
        position: relative;
        top: 40vh;
    }
    .drink {
        position: absolute;
        z-index: 5;

        h3 {
            color: white;
            font-size: 2rem;
            margin: 0 15px;
            padding-bottom: 20vh;
            text-align: center;
            text-shadow: 2px 2px 0 #333;
        }
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
        }
        .drink {
            h3 {
                font-size: 2rem;
                margin: 0 12.5%;
                padding-bottom: 10vw;
            }
        }
    }
    @media only screen and (min-width: 768px){
        .tabletop {
            height: 250vh;
            top: 900px;

            h3 {
                font-size: 4rem;
                margin: 0 25%;
            }
        }
        .sauce {
            h2 {
                font-size: 3rem;
                margin: 20vh 12.5%;
            }
        }
        .drink {
            top: 2000px;
        }
    }
`;