import styled from 'styled-components';


export const SlideshowStyles = styled.div`
    margin-top: 170px;
    max-height: 70vh;
    overflow: hidden;
    padding-bottom: 20px;
    padding-top: 10px;
    position: relative;

    h2 {
        background-color: #fff;
        border-radius: 0 5px 5px 0;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
        color: #333;
        left: 0;
        max-width: 80%;
        padding: 10px 20px;
        position: absolute;
        top: 10px;
    }

    ul {
        margin-block-end: 0;
        margin-block-start: 0;
        padding-inline-start: 0;
    }
    li {
        display: none;
        list-style: none;

        &.selected {
            display: block;
        }
    }
    img {
        min-height: 80vh;
    }
    @media screen and (min-width: 650px){
        img {
            min-height: 70vh;
        }
    }
`;