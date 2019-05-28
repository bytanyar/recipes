import styled from 'styled-components';


export const RecipeModalStyles = styled.div`
    .recipe-container {
        background-color: beige;
        border-radius: 20px;
        left: 12.5%;
        margin: 5vh auto;
        max-height: calc(90vh - 6em);
        max-width: 500px;
        overflow: auto;
        padding: 5px 15px 15px;
        position: fixed;
        right: 12.5%;
        top: 5vh;
        width: 75%;
        z-index: 1000;
    }
    .close-x {
        background-color: #fff;
        border: 1px solid #333;
        border-radius: 50%;
        padding: 0 5px;
        position: absolute;
        right: 5px;
        text-align: left;
        top: 5px;
        width: 20px;
    }
    .close-x:hover {
        background-color: blanchedalmond;
    }
    @media only screen and (min-width: 650){
        .close-x {
            right: 10px;
            top: 10px;
        }
    }
`;