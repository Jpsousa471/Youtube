import styled from "styled-components";

export const Container = styled.div`

`;

export const MenuContainer = styled.div`
  
`;

export const Ul = styled.ul`
    list-style: none;
    padding: 10px 0;
    border-top: 1px solid rgba(0,0,0,0.05);
`;

export const A = styled.a`
    text-decoration: none;
`;

export const MenuTrigger = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
`;

export const Img = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
`;

export const DropDownMenu = styled.div`
    position: absolute;
    top: 20px;
    background-color: #fff;
    border-radius: var(border-radius);
    padding: 10px 20px;
    width: 200px;
`;

export const H3 = styled.h3`
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 20px 0;
    font-weight:500;
    color: var(--primary-text-color);
    line-height: 1.2rem;
`;

export const Span = styled.span`
    font-size: 14px;
    color: var(--secondary-text-color);
`;

export const DropDownItem = styled.li`
     padding: 10px 0;
     border-top: 1px solid rgba(0,0,0,0.05);
`;

export const BoxWhite = styled.div`
    width: 200px;
    height: auto;
    display: grid;
    align-items: center;
    border-radius: 20px;
    justify-content: center;
    background-color: black;
    color: #fff;
    margin-left: 1300px;
    margin-top: 150px;
`;

export const Tester = styled.div`
    padding: 10px 0;
    border-top: 2px solid red;
`;

export const LogOut = styled.div`
    width: 100%;
    background-color: red;
`;

export const Li = styled.li`
         padding: 10px 0;
         border-top: 1px solid black;
         width: 100%;

         :hover{
            color: red;
            cursor: pointer;
         }
`;