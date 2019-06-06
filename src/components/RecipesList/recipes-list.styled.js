import styled from 'styled-components';


export const RecipesContainerStyles = styled.div`
    height: 100vh;
    margin: 151px auto 0;
    max-width: 1000px;
    padding: 20px;

    * {
        box-sizing: border-box;
    }
    .recipe-modal-bg {
        background-color: rgba(0, 0, 0, 0.5);
        bottom: 0;
        left: 0;
        position: fixed;
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
        background-color: rgba(255, 255, 255, 0.75);
        border: 1px solid #333;
        margin: 20px auto;
        margin-block-end: 0;
        margin-block-start: 0;
        max-width: 1000px;
        padding-inline-start: 0;
        position: relative;
        width: 100%;

    }
    .recipe-id:nth-child(2n) {
        background-color: rgba(253, 216, 181, 0.5); /* #fdd8b5 */
    }
    .recipe {
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 5px 0;
        text-align: left;

        &:hover,
        &.active {
            background-color: #d9b08c;
        }
    }
    .name {
        font-size: 18px;
        max-width: 550px;
        padding-left: 20px;
        width: 100%;
    }
    .time {
        display: none;
    }
    @media only screen and (min-width: 400px){
        .name {
            width: 65%;
        }
        .time {
            display: block;
            max-width: 350px;
            width: 30%;
        }
    }
    @media only screen and (min-width: 650px){
        .name {
            width: 45%;
        }
        .time {
            width: 50%;
        }
    }
`;