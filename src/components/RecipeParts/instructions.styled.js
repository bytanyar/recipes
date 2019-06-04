import styled from 'styled-components';


export const InstructionContainerStyles = styled.div`
    .instructions-list {
        list-style: none;
        padding: 10px;
        text-align: left;
    }
    ul li {
        display: block;
        font-size: 0.9em;
        list-style-type: none;
        margin: 0;
    }
    @media only screen and (min-width: 650px){
        .instructions-list {
            padding: 10px 40px;
        }
        ul li {
            font-size: 1em;
        }
    }
`;