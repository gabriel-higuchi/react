import Form from "../";
import Logo from "../assets/LogoNova.svg";
import { BackContainer, LogoContainer, LoginContent } from "./styled";

function Login() {
  return (
    <BackContainer>
      <LogoContainer>
        <header>
          <img src={Logo}></img>
        </header>
      </LogoContainer>
        <LoginContent>
            <Form></Form>
        </LoginContent>
    </BackContainer>
  );
}

export default Login;
