import styled from "styled-components"

export const H2 = styled.h2`
    font-size:20px;
    font-weight: 550;
    color:rgba(64,64,64,0.8);
    margin: 0px;
    margin-bottom: 5px;
    ${(prop) => prop.type === "black" &&`
        font-size:23px;
        color:#1d1d1d;
    `}
    ${(prop) => prop.type === "Size35" &&`
        font-size:33px;
        color:#1d1d1d;
    `}
    ${(prop) => prop.type === "Size20" &&`
        font-size:20px;
        color:#1d1d1d;
    `}
`
export const  P = styled.p`
    color:#666;
    margin: 0px;
    margin-top: 5px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover{
        color:rgba(64,64,64,0.8)
    }
`
export const But = styled.button`
    width:70px;
    font-size:15px;
    border:1px solid rgba(102,102,102,0.2);
    border-radius: 5px;
    color:#1d1d1d;
    padding:3px;
    background-color: transparent;
    position: relative;
    ${(prop) => prop.type === "Size" &&`
        background-color:#84b74e;
        color:white;
    `}
    ${(prop) => prop.type === "Categories" &&`
        background-color: rgba(64,64,64,0.8);
        color:white;
    `}
`
export const DivBody = styled.div`
    display:flex;
    gap:5px 5px;
    flex-wrap: wrap;
    row-gap:100px;
    column-gap: 15px;
    padding: 10px;
    padding-top:60px;
    margin-top: 20px;
`
export const Button = styled.button`
    width:100px;
    height:40px;
    border:1px solid rgba(102,102,102,0.3);
    border-radius: 3px;
    background-color: #FFFF;
    transition: 0.3s ease;
    cursor: pointer;
    &:hover{
        background-color: rgba(102,102,102,0.1);
    }
    ${
        (prop) => prop.type === "major" &&`
            background-color:#84b74e;
            color:#1d1d1d;
        `
    }
    ${(prop) => prop.type === "Delet" &&`
        background-color:red;
        color:#FFFF;
        margin-top:15px;
        &:hover{
            background-color:#1d1d1d;
        }
    `}
    ${
        (prop) => prop.type === "Order" &&`
            background-color:#84b74e;
            color:#1d1d1d;
            width:100%;
        `
    }
`
export const DivApp = styled.div`
    height:80vh;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const Form = styled.form`
    width:55%;
    border-radius: 5px;
    background-color: #FFFF;
    box-shadow: 0 35px 35px -15px rgba(0,0,0,0.3);
    padding:12px;
    ${(prop) => prop.type === "Login" &&`
        width:40%;
    `}
`
export const Span = styled.span`
    color:#FFFF;
    background-color: red;
    padding:4px;
    ${(prop) => prop.type === "titel" &&`
        color:rgba(64,64,64,0.8);
        background-color: transparent;
    `}
`
export const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:6px;
    margin-top: 6px;
`
export const DivCount = styled.div`
    display:flex;
    align-items: center;
    gap:6px 6px;
`
export const DivNumber = styled.div`
    width:25px;
    height:25px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #FFFF;
    cursor: pointer;
    font-size:19px;
    font-weight: 500;
    border:1px solid rgba(102,102,102,0.3);
    transition: 0.3s ease;
    &:hover{
    background-color: #84b74e;
    }
`
export const DivBodyInfo = styled.div`
    width:98%;
    padding:4px;
    border-radius: 3px;
    border:1px solid rgba(102,102,102,0.3);
    display: flex;
    gap: 7px 7px;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
`
export const DivModule = styled.div`
    position: fixed;
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px);
    top:0px;
    left:0px;
    z-index: 9999;
    ${(prop) => prop.type === "Map" &&`
        flex-direction: column;
    `}
`
export const DivBodyModle = styled.div`
    width:55%;
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0 35px 35px -15px rgba(0,0,0,0.3);
    padding:12px;
    ${(prop) => prop.type === "Map" &&`
        width:90%;
        height:85vh;
        padding:0px;
    `}
    ${(prop) => prop.type === "User" &&`
        width:25%;
    `}
    ${(prop) => prop.type === "Order" &&`
        width:90%;
    `}
`
export const DivCloesModule = styled.div`
    display:flex;
    justify-content: flex-end;
`