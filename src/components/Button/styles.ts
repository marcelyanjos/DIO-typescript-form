import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: ${(props)=>props.disabled?'#b37cc4':'#81259D'};
    color: #FFF;
    pointer-events:${(props)=>props.disabled?'none':null};
    border: ${(props)=>props.disabled?'1px solid #b37cc4':'1px solid #81259D'};
    border-radius: 21px;

    &:hover {
        opacity: 0.8;
        cursor:pointer;
    }
`