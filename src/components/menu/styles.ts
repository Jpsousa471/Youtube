import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
    width: ${({openMenu}) => openMenu? '260px' : '100px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 100%;
    min-height: ${({openMenu}) => openMenu? '15px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: ${({openMenu}) => openMenu? 'none' : 'center'};


    span {
        font-weight: ${({openMenu}) => openMenu? '600' : '400'};
        margin-left: ${({openMenu}) => openMenu? '20px' : ''};
        //margin-right: ${({openMenu}) => openMenu? '' : '14px'};        
        font-size: ${({openMenu}) => openMenu? '14px' : '10px'};
    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 25px;
    align-items: center;
    justify-content: center;
    //margin-left: 15px;
    //margin-right: 5px;
`;

export const Divider = styled.div<{openMenu : boolean}>`
    width: ${({openMenu}) => openMenu? '100%' : ''};
    border-top:${({openMenu}) => openMenu? '2px solid #bfbfbf' : ''};
    margin: ${({openMenu}) => openMenu? '20px 0' : ''};
`;
//100%
//5px solid #bfbfbf
//20px 0
export const List = styled.li<{ openMenu: boolean }>`
    list-style: none;
    display:  ${({openMenu}) => openMenu? 'flex' : ''};
    align-items: center;
    justify-content: center;
    margin-right:  ${({openMenu}) => openMenu? '0' : '40px'};
    margin-left: ${({openMenu}) => openMenu? '-50px' : '0'};
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const First = styled.div<{openMenu: boolean}>`
    visibility: ${({openMenu}) => openMenu? 'visible' : 'hidden'};
    width: 260px;
    margin-top: ${({openMenu}) => openMenu? '' : '-65px'};
    min-height: ${({openMenu}) => openMenu? '15px' : '70px'};
    margin-left: -4px;
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 17px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: ${({openMenu}) => openMenu? 'none' : 'center'};
    

    span {
        font-weight: ${({openMenu}) => openMenu? '600' : '400'};
        margin-left: ${({openMenu}) => openMenu? '20px' : 'none'};
        font-size: ${({openMenu}) => openMenu? '14px' : '10px'};
    }

    :hover {
        background-color: ${({openMenu}) => openMenu? '#f2f2f2' : ''} ;
    }
`;

export const FirstTwo = styled.div<{openMenu: boolean}>`
    visibility: ${({openMenu}) => openMenu? 'hidden' : 'visible'};
    width: ${({openMenu}) => openMenu? '' : '260px'};
    min-height: ${({openMenu}) => openMenu? '' : '70px'};
    margin-left: ${({openMenu}) => openMenu? '' : '-4px'};
    margin-bottom:  ${({openMenu}) => openMenu? '-55px' : ''};
    border-radius: ${({openMenu}) => openMenu? '' : '10px'};
    margin-right: 15px;
    cursor: ${({openMenu}) => openMenu? '' : 'pointer'};
    padding: ${({openMenu}) => openMenu? '' : '2px 17px'};
    box-sizing: ${({openMenu}) => openMenu? '' : 'border-box'}; 
    display: ${({openMenu}) => openMenu? '' : 'flex'};
    flex-wrap: ${({openMenu}) => openMenu? '' : 'wrap'};
    align-items: ${({openMenu}) => openMenu? '' : 'center'};
    justify-content: ${({openMenu}) => openMenu? 'none' : 'center'};
`;

export const Secund = styled.div<{openMenu: boolean}>`
    visibility: ${({openMenu}) => openMenu? 'visible' : 'hidden'};
    width: 260px;
    min-height: ${({openMenu}) => openMenu? '15px' : '70px'};
    margin-left: -4px;
    border-radius: 10px;
    background-size: 100 ;
    cursor: pointer;
    padding: 2px 17px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: ${({openMenu}) => openMenu? 'none' : 'center'};


    span {
        font-weight: ${({openMenu}) => openMenu? '600' : '400'};
        margin-left: ${({openMenu}) => openMenu? '20px' : 'none'};
        font-size: ${({openMenu}) => openMenu? '14px' : '10px'};
    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const Third
= styled.div<{openMenu: boolean}>`
    visibility: ${({openMenu}) => openMenu? 'visible' : 'hidden'};
    width: 260px;
    min-height: ${({openMenu}) => openMenu? '15px' : '70px'};
    margin-left: -4px;
    border-radius: 10px;
    background-size: 100 ;
    cursor: pointer;
    padding: 2px 17px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: ${({openMenu}) => openMenu? 'none' : 'center'};


    span {
        font-weight: ${({openMenu}) => openMenu? '600' : '400'};
        margin-left: ${({openMenu}) => openMenu? '20px' : 'none'};
        font-size: ${({openMenu}) => openMenu? '14px' : '10px'};
    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const SpanV = styled.div<{openMenu: boolean}>`
    visibility: ${({openMenu}) => openMenu? 'visible' : 'hidden'};
    width: 260px;
    min-height: ${({openMenu}) => openMenu? '45px' : '70px'};
    margin-left: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 10px;
    background-size: 100;   
    font-size: ${({openMenu}) => openMenu? '18px' : '10px'};  
    font-weight: ${({openMenu}) => openMenu? '600' : '400'};  

`; 

export const BoxExplication = styled.p<{openMenu: boolean}>`
    visibility: ${({openMenu}) => openMenu? 'visible' : 'hidden'};
`;