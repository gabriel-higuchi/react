import styled from "styled-components";

export const BackContainer = styled.div`
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-image: url("https://img.freepik.com/fotos-gratis/texturas-de-parede-cinza-para-plano-de-fundo_74190-4389.jpg?w=1380&t=st=1706407787~exp=1706408387~hmac=38f5ac331f057853ed788bbe3c1fef46bb7ccc7c0b49b580324d0edc43fe099f");
  backdrop-filter: blur(2px);
`

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
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Poppins", sans-serif;
`;
