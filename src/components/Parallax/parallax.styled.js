import styled from 'styled-components';


export const ParallaxStyles = styled.div`
    .page-image {
        width: 100%;
    }
    .parallax-image {
        height: 150vh;

        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        .hover-text {
            margin-top: -75vh;

            img {
                max-width: 150px;
            }
        }
        h3 {
            color: white;
            font-size: 3rem;
            margin: 0;
            text-shadow: 2px 2px 0 #333;
        }
        p {
            color: white;
            font-size: 2rem;
            margin-top: 65vh;
            text-shadow: 2px 2px 0 #333;
        }
    }
        .food {
            color: white;
            font-size: 2rem;
            margin-top: 25vh;
            text-shadow: 2px 2px 0 #333;
        }
`;