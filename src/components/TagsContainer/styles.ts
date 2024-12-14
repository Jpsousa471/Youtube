import styled from "styled-components";

export const PrincipalContainer = styled.div<{openMenu:boolean}>`
    width:${({openMenu}) => openMenu? '1200px' : '1400px'};
    height: 55px;
    margin-bottom:25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    position: sticky;
    top: 55px;   
    `;

export const Container = styled.div`
    width:1450px;
    height: 55px;
    margin-bottom:25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    box-sizing: border-box;
    position: sticky;
    overflow-x: scroll;
    overflow: hidden;
    scroll-behavior: smooth;
    :hover{
        background-color:  #d3d3d3;
    }
`;

export const BoxContainer = styled.div<{color : boolean}>`
    width: 200px;
    height: 30px;
    background-color:#f4f4f4;
    border-radius: 6px;
    display: inline-block;
    white-space: nowrap;
    align-items: center;
    background-color: ${({color}) => color? 'black' : ''};
    justify-content: center;
    outline: none;
    font-size: 14px;
    font-weight: 600;
    box-sizing: border-box;
    padding: 5px;
    margin: 0 5px;
    cursor: pointer;  
    
`;

export const Text = styled.span`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
`;

export const Back = styled.button`
    width: 40px;
    height: 40px;
    position: absolute;
    background-color: #fff;
    margin-right: 10px;
    border: none;
    display: flex;
    align-items: center;
    border-radius: 50%;

    
`;
export const Next = styled.button`
    width: 40px;
    height: 40px;
    position: absolute;
    margin-left: 10px;
    border-radius: 50%;
    border: none;
    background-color: #fff;
`;
export const ButtonContainer = styled.div`
    width: 40px;
    height: 65px;
    color: blue;
    position: sticky;
    margin-left: 10px;
    margin-right: 10px;
    :hover{
        background-color:#f4f4f4;
    }
`; 
export const IMG = styled.img`
 width: 20px;
 height: 20px;
 background-size: auto;
 
`;