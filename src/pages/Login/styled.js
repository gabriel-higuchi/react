import styled from "styled-components";

export const BackContainer = styled.div`
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-image: ${(props) => props.Bg};
  backdrop-filter: blur(2px);
  position: relative;
`;

export const LogoContainer = styled.div`
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

export const LoginContent = styled.div`
  background-color: #add2e0;
  width: 25%;
  height: 55vh;
  border-radius: 10%;
  box-shadow: 25px 25px 16px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Poppins", sans-serif;
`;

export const SwitchButton = styled.label`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 50px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
      height: 30px;
      width: 30px;
      left: 5px;
      bottom: 10px; /* Ajuste para centralizar verticalmente */
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: #2196F3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(60px); /* Ajuste de acordo com o tamanho do botão */
    -ms-transform: translateX(60px);
    transform: translateX(50px);
  }

  left: 50%;
  transform: translateX(-50%);
  top: 80%;
`;
  
