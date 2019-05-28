import styled from 'styled-components';

export const IngredientContainerStyles = styled.div`
    .ingredients-list {
        list-style: none;
        padding: 10px;
        text-align: left;
    }
    ul li {
        display: block;
        font-size: 0.9em;
        margin: 0;
    }
    @media only screen and (min-width: 650px){
        .ingredients-list {
            padding: 10px 40px;
        }
        ul li {
            font-size: 1em;
        }
    }
`;