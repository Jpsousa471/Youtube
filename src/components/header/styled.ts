import styled from "styled-components";

export const Container = styled.header`
    width: 1490px;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    :hover {
        background-color:  #f2f2f2;
    }
   
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    margin: ${({ margin }) => margin? margin: 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ButtonContainer2 = styled.div<{ margin?: string, login:boolean }>`
    visibility: ${({login}) => login? 'visible' : 'hidden' };
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    margin: ${({ margin }) => margin? margin: 0};
    left: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
//#f2f2f2
export const ButtonIcon = styled.img`
    width: 20px;
`;

export const ButtonIcon2 = styled.img<{ login:boolean }>`
    visibility: ${({login}) => login? 'visible' : 'hidden'};
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
    :hover {
        background-color:  #f2f2f2;
    }
   
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    cursor: pointer;
    
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
   
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
   
`;

export const HeaderButton = styled.div`
    width: 220px;
    display: flex;
    justify-content: flex-end;
    :hover {
        background-color:  #f2f2f2;
    }
`;

export const ButtonLoginContainer = styled.div`
    width : 290px;
    height: 35px;
    border-radius: 40px;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 5px;
    color: #00ced1;
    cursor: pointer;

`;

    export const DropDownMenu = styled.div<{dropMenu:boolean, ref: React.Ref<HTMLButtonElement | null>}>`
    visibility: ${({dropMenu}) => dropMenu? 'visible': 'hidden'};
    transition: 1.2rem;
    position: absolute;
    top: 60px;
    right: 7px;
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 10px 20px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   

    ::before{
        content: '';
        position: absolute;
        top: -5px;
        right: 20px;
        height: 20px;
        width: 20px;
        background-color: #f9f9f9;
        transform: rotate(45deg);
    }
`;

export const DropDownMenu2 = styled.div<{dropMenus:boolean, ref: React.Ref<HTMLButtonElement | null>}>`
    visibility: ${({dropMenus}) => dropMenus? 'hidden': 'visible'};
    transition: 1.2rem;
    position: absolute;
    top: 50px;
    right: 175px;
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 10px 20px;
    width: 150px;
    display: grid;
    align-items: center;
    justify-content: center;

    ::before{
        content: '';
        position: absolute;
        top: -5px;
        right: 20px;
        height: 20px;
        width: 20px;
        background-color: #f9f9f9;
        transform: rotate(45deg);
    }
`;

export const H3 = styled.h3`
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 500px;
    color: #555;
    line-height: 1.2rem;
`;

export const SpanH3 = styled.span`
    font-size: 14px;
    color: #cecece;
    font-weight: 400;
`;

export const Uli = styled.ul`
    list-style: none;
    padding: 10px 0;  
`;

export const Exit = styled.span`
    background-color: red;
    margin-bottom: 2000px;
    margin-left: 40px;

`

export const ImgLogin = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: #00ced1
`;
export const UserName = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
`;
