import styled from "styled-components";

export const Container = styled.div`
width: 110%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #d3d3d3;
margin-top: 0;
margin-left: -15px;
`;

export const WhiteBox = styled.div`
    width: 800px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Input = styled.input<{valid:boolean}>`
    width: 350px;
    height: 30px;
    border: ${({valid}) => valid? '2px solid blue' : '2px solid red'};
    margin-right: 30px;
    border-radius: 5px;
    color: blue;

    
    &:focus {
    border-color: ${({valid}) => valid? '1px solid blue' : '1px solid red'};
    border-width: 2px;
    outline: none;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10px;
    
    :hover{
        transform: scale(1.08);

    }
`;

export const Button = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 30px;
    color: blue;
    border: none;
    margin-right: 20px;
    margin-top: 25px;
    cursor: pointer;

    :hover{
        background-color: green;
    }
`;

export const G0ogle = styled.img`
    width: 50px;
    margin-top: 20px;
`;

export const Div = styled.div`
    width: 100%;
    height: 200px;
    display: grid;
    align-items: center;
    justify-content: flex-start;
`;

export const Diva = styled.div`
width: 800px;
height: 200px;
display: grid;
align-items: center;
justify-content: flex-start;
margin-top: -95px;
margin-left: 15px;
margin-right: 70px;
font-size: 30px
`;

export const Pone = styled.span<{valid:boolean}>`
display: ${({valid}) => valid? 'none' : 'block'};
color: red;
font-size: 12px;
margin-top: 0;
`;

export const Ptwo = styled.span<{valid:boolean}>`
display: ${({valid}) => valid? 'none' : 'block'};
color: red;
font-size: 12px;
margin-top: 0;
`;

export const Ptrhee = styled.span<{valid:boolean}>`
display: ${({valid}) => valid? 'none' : 'block'};
height: 3px;
color: red;
font-size: 12px;
margin-top: 0;
`;

export const CheckBoxContainer = styled.div`
    display: flex;
    width: 40%;
`;



