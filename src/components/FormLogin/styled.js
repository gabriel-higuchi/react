import styled from "styled-components";

export const FormContainer = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

`

export const LoginInput = styled.input`
    padding: .5rem .8rem;
    border-radius: .6rem;
    border: 1px solid #cdcdcd;
    font-size: 1.3rem;
    width: 60%;
    height: 2.5rem;
    margin-bottom: 1rem;
    box-shadow:3px 3px 6px rgb(142, 142, 142);
`
export const LoginButton = styled.button`
    padding: .6rem 1rem;
    border-radius: 1rem;
    border: 1px solid transparent;
    font-size: 1.2rem;
    box-shadow: 0 .1rem .1rem 1px rgba(116,116, 116, 0.37);
    cursor: pointer;
    transition: all .5s ease-in-out;
    background-color: #1D4B73;
    width: 40%;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 1.5rem;   
    
    &:hover{
        background-color: transparent;
        color: #1D4B73;
        border: 1px solid #1D4B73;

    }
`
export const LoginTexto = styled.h1`
    font-size: 4rem;
    height: 25%;
    color: #1D4B73;
    margin-bottom: 1rem;


`
export const Form = styled.form`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    width: 100%;

    
`
export const EsqSenha = styled.a`
    color: #1D4B73;
    font-size: 1rem;
`



