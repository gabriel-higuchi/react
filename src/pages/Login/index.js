import Form from "../components/FormLogin";
import Logo from "../assets/LogoNova.svg";
import { BackContainer, LogoContainer, LoginContent } from "./styled";

function Login() {
    return (
        <BackContainer>
            <LogoContainer>
                <header>
                    <img src={Logo} alt="Logo"></img>
                </header>
            </LogoContainer>
            <LoginContent>
                <Form/>
            </LoginContent>
        </BackContainer>
    );
}

export default Login;
