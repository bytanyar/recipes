import styled from 'styled-components';


export const SlideshowStyles = styled.div`
    margin-top: 170px;
    padding-top: 10px;

    h2 {
        color: #333;
    }

    li {
        display: none;
        list-style: none;

        &:first-child {
            display: block;
        }
    }
`;