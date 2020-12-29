import React from 'react'
import styled from 'styled-components'
import { PageContainer, RowWrapperCenter } from '../Components/StyledComponents'

const HeaderBG = styled.div`
    width: 100vw;
    height: 50%;
    background: #ACB8C6;
    padding: 10%
`;

const Home = () => {
    return (
        <PageContainer>
            <RowWrapperCenter>
                <HeaderBG><h1>easyexam</h1></HeaderBG>
            </RowWrapperCenter>
        </PageContainer>
    )
}

export default Home
