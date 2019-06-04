import styled from 'styled-components';


export const RecipeModalStyles = styled.div`

    .recipe-container {
        background-color: #ffcb9a;
        border-radius: 20px 20px 0 0;
        bottom: 0;
        left: 12.5%;
        margin: 5vh auto 0;
        max-height: calc(90vh - 6em);
        max-width: 500px;
        overflow: auto;
        padding: 5px 15px 0;
        position: fixed;
        right: 12.5%;
        width: 75%;
        z-index: 1000;
    }
    .close-x {
        background-color: #fff;
        border: 1px solid #333;
        border-radius: 50%;
        padding: 0 5px;
        position: absolute;
        right: 15px;
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