import styled from 'styled-components';


export const ParallaxStyles = styled.div`
    .page-image {
        width: 100%;
    }
    .parallax-image {
        height: 100vh;

        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        h3 {
            color: white;
            font-size: 3rem;
            margin-top: -50vh;
            text-shadow: 2px 2px 0 #333;
        }
        p {
            color: white;
            font-size: 2rem;
            margin-top: 65vh;
            text-shadow: 2px 2px 0 #333;
        }
    }
`;