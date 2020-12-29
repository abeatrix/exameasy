import React from 'react'
import styled from 'styled-components'
import { PageContainer, RowWrapperLeft, GreenBtn } from '../Components/StyledComponents'
import '../index.css'

const QuestionCount = styled.h2`
    margin: 20px;
    color: #434933;
`;

const QuestionBG = styled.div`
    width: 100%;
    background: #c5d4e6;
    padding: 10%
`;
const QuestionText = styled.p`
    margin: 20px;
    color: #020202;
    font-weigth: normal;
    font-size: 1rem;
`;

const InputWrapper = styled.div`
    margin: 20px;
    padding: 20px;
`;

const BtnWrapper = styled.div`
    margin: 20px;
    text-align: center;
`;

const Test = () => {

    return (
        <PageContainer>
            <RowWrapperLeft>
                <QuestionCount>Question 1/10</QuestionCount>
                <QuestionBG>
                    <QuestionText>If 16-7w=w+14-6w16−7w=w+14−6w16, minus, 7, w, equals, w, plus, 14, minus, 6, w, what is the value of w-1w−1w, minus, 1?</QuestionText>
                    </QuestionBG>
            <form>
                <InputWrapper>
                <input type="radio" class="labelchecker" name="Q1" style={{marginRight: '30px'}}/>
                <label for="1" class="checkmark">w−1=−2</label>
                </InputWrapper>

                <InputWrapper>
                <input type="radio" class="labelchecker" name="Q1" style={{marginRight: '30px'}}/>
                <label for="2" class="checkmark">w-1=0w−1=0</label>
                </InputWrapper>

                <InputWrapper>
                <input type="radio" class="labelchecker" name="Q1" style={{marginRight: '30px'}}/>
                <label for="3" class="checkmark">w−1=−3</label>
                </InputWrapper>

                <InputWrapper>
                <input type="radio" class="labelchecker" name="Q1" style={{marginRight: '30px'}}/>
                <label for="4" class="checkmark">w-1=1w−1=1</label>
                </InputWrapper>

                <BtnWrapper>
                    <GreenBtn type='submit'>Check Answer</GreenBtn>
                </BtnWrapper>

            </form>
            </RowWrapperLeft>
        </PageContainer>
    )

}

export default Test
