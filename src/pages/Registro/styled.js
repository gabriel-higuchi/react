import styled from "styled-components";

export const BackRegContainer = styled.div`
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-image: url("https://img.freepik.com/fotos-gratis/texturas-de-parede-cinza-para-plano-de-fundo_74190-4389.jpg?w=1380&t=st=1706407787~exp=1706408387~hmac=38f5ac331f057853ed788bbe3c1fef46bb7ccc7c0b49b580324d0edc43fe099f");
  backdrop-filter: blur(2px);
`
export const LogoRegContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  color: #1d4b73;

    img {
        width: 15rem;
        margin-top: 1rem;
        margin-left: 1rem;
    }
`;
export const FormRegContainer = styled.div`
    background-color: #add2e0;
    width: 40%;
    height: 70vh;
    border-radius: 10%;
    box-shadow: 25px 25px 16px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Poppins", sans-serif;
    flex-direction: column;
    
`
export const RegTexto = styled.h1`
    font-size: 4.6rem;
    height: 25%;
    color: #1D4B73;
    margin-bottom:1rem;
    margin-left:27%;


`
export const RegInput = styled.input`
    padding: 0.8rem 1.2rem;
    border-radius: 1rem;
    border: 1px solid #cdcdcd;
    font-size: 1.3rem;
    width: 30%;
    height: 2.5rem;
    margin-left: 10%;
    box-shadow:3px 3px 6px rgb(142, 142, 142);
    margin-bottom: 3%;
    &.fontpequena{
        font-size: 1rem;
    }
        
`
export const RegisterButton = styled.button`
    padding: 1.5rem 1rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    font-size: 2rem;
    box-shadow: 0 .1rem .1rem 1px rgba(116,116, 116, 0.37);
    cursor: pointer;
    transition: all .5s ease-in-out;
    background-color: #1D4B73;
    width:50%;
    color: #ffffff;
    font-weight: bold;   
    
    &:hover{
        background-color: transparent;
        color: #1D4B73;
        border: 1px solid #1D4B73;

    }
    margin-left: 25%;
    margin-bottom: 10%;
`
export const CompleteStyle = styled.div`
    margin-left: 28%;
`





    



