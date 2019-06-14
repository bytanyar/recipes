import styled from 'styled-components';


export const ControlStyles = styled.div`
    position: relative;
    
    button {
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        padding: 5px 10px;
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