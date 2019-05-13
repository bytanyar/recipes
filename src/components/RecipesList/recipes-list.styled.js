import styled from 'styled-components';


export const RecipesContainerStyles = styled.div`
    height: 100vh;
    margin: -20px auto 0;
    max-width: 1200px;
    padding-top: 20px;

    * {
        box-sizing: border-box;
    }
    .recipe-modal-bg {
        background-color: rgba(0, 0, 0, 0.5);
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 100;
    }
    .background-fixed img {
        max-width: 1200px;
        overflow-y: hidden;
        transition-duration: 0.5s;
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        width: 100vw;
        z-index: 1;
    }
    .recipes-list {
        background-color: rgba(255, 255, 255, 0.5);
        border: 1px solid #333;
        margin: 20px;
        margin-block-end: 0;
        margin-block-start: 0;
        padding-inline-start: 0;
        position: relative;
        z-index: 200;
    }
    .recipe {
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 5px 0;
        text-align: left;

        &:nth-child(2n){
            background-color: beige;
        }
        &:hover {
            background-color: blanchedalmond;
        }
        &.active {
            background-color: lightblue;
        }
    }
    .name {
        font-size: 18px;
        max-width: 350px;
        padding-left: 20px;
        width: 45%;
    }
    .time {
        max-width: 150px;
        width: 20%;
    }
    .main-ingredient {
        max-width: 250px;
        width: 35%;
    }
`;