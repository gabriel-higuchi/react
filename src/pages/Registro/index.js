import { BackRegContainer, FormRegContainer, LogoRegContainer, RegInput, RegTexto, RegisterButton } from "./styled"
import Logo from "../../assets/LogoNova.svg"

function Registro(){
    return(
        <BackRegContainer>
            <LogoRegContainer>
                <img src={Logo} alt="Logo"></img>
            </LogoRegContainer>
            <FormRegContainer>
                <RegTexto>Registrar</RegTexto>
                <RegInput type="text" placeholder="Nome"></RegInput>
                <RegInput type="text" placeholder="Cpf"></RegInput>
                <RegInput type="email" placeholder="email"></RegInput>
                <RegInput type="text" placeholder="celular"></RegInput>
                <RegisterButton>Entrar</RegisterButton>
            </FormRegContainer>
        </BackRegContainer>



    )
}
export default Registro