import styled from 'styled-components';


export const ControlStyles = styled.div`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    
    button {
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-family: "Algerian", sans-serif;
        font-size: 45px;
        padding: 15px 20px;
        position: absolute;
        top: 50%;
    }
    .next {
        right: 0;
    }
    .prev {
        left: 0;
    }
`;