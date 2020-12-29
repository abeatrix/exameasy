import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
    padding: 0.5rem calc((100vw - 1000px) / 2);
`;

export const RowWrapperLeft = styled.div`
    display: row;
    text-align: left;
    width: 100%;
`;

export const RowWrapperCenter = styled.div`
    display: row;
    text-align: center;
`;

export const GreenBtn = styled.button`
    border-radius: 4px;
    background: #434933;
    padding: 10px 22px;
    color: #FFF;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #FFF;
        color: #010606;
    }
`
