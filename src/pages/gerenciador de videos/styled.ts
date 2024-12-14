import styled from "styled-components";

interface ContainerProps {
    openBox?: boolean
    valid?: boolean
}

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: block;
align-items: center;
justify-content: center;
`;

export const HeaderContainer = styled.header`
width: 100%;
margin-top: 5px;
position: absolute;
top: 50px;
display: flex;
align-items: center;
justify-content: center;
`;

export const BoxCreate = styled.div<ContainerProps>`
visibility: ${({openBox}) => openBox? 'hidden' : 'visible'};
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
row-gap: 10px;
align-items: center;
justify-content: center;
`;

export const ContainerModal = styled.div`
width: 50vw;
height: 80vh;
background-color: white;
border-radius: 12px;
display: flex;
flex-direction: column;
padding: 20px 45px;
box-sizing: border-box;
align-items: center;
justify-content: center;
`;

export const Input = styled.input<ContainerProps>`
width: 600px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
padding: 0 30px;
font-size: 17px;
margin-top: 10px;
box-sizing: border-box;
border: 2px solid red;
border-radius: 40px;

&:focus{
    border: 3px solid blue;
    outline: none;
}
`;

export const Button = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 40px;
    border: 2px solid black;
    margin-top: 10px;
    background-color: red;
    color: #fff;
    cursor: pointer;

    :hover {
        transform: scale(1.06);
    }
`;

export const Logo = styled.img`
    width: 80px;
    height: 50px;
   
    `;

export const Span = styled.span`
font-size: 36px;
font-weight: 500;
margin-left: 350px;
`;

export const Exit = styled.div`
position: absolute;
top: 7vh;
right: 24vw;
width: 25px;
height: 25px;
color: white;
display: flex;
align-items: center;
justify-content: center;
background-color: red;
font-weight: 500;
border-radius: 5px;
cursor: pointer;
`;

export const MessageContainer = styled.div`
width: 100%;
margin-top: 2px;
margin-left: 100px;
`;

export const InputEmpty = styled.span<ContainerProps>`
font-size: 14px;
color: red;
`;

export const UserVideosContainer = styled.div`

`;

export const CardVideos = styled.div`

`;