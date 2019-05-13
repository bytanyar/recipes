import styled from 'styled-components';


export const HomeStyles = styled.div`
    min-height: 150vh;

    img {
        max-width: 600px;
        width: 100vw;
    }
    #chicken {
        left: calc((100vw - 600px) / 2);
        position: absolute;
        top: 150px;
        z-index: 1;
    }
    #drink {
        position: relative;
        top: 750px;
    }
    #sauce {
        left: calc((100vw - 600px) / 2);
        position: absolute;
        top: 475px;
        z-index: 5;
    }
`;