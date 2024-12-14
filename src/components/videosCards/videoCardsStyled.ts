import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   cursor: pointer;
`;

export const ImageBanner = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 12px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ChannelImage= styled.div`
    background-color: aquamarine;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
`;

export const Button = styled.button`
width: 50px;
height: 50px;
background-color: green;
border-radius: 5px;
`;