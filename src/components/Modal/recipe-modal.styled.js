import styled from 'styled-components';


export const RecipeModalStyles = styled.div`
    .recipe-container {
        background-color: beige;
        border-radius: 20px;
        left: 12.5%;
        margin: 5vh auto;
        max-height: 90vh;
        max-width: 500px;
        padding: 5px 15px 15px;
        position: absolute;
        right: 12.5%;
        top: 5vh;
        width: 75%;
        z-index: 750;
    }
    .close-x {
        background-color: #fff;
        border: 1px solid #333;
        border-radius: 50%;
        padding: 0 5px;
        position: absolute;
        right: 20px;
        text-align: left;
        top: 10px;
        width: 20px;
    }
    .close-x:hover {
        background-color: blanchedalmond;
    }
`;