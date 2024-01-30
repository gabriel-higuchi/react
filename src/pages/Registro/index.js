import { CompleteStyle,BackRegContainer, FormRegContainer, LogoRegContainer, RegInput, RegTexto, RegisterButton } from "./styled"
import Logo from "../../assets/LogoNova.svg"
import { useState } from "react";
import CountrySelect from "./Paises";


function Registro(){

    const [name,setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [celular, setCelular] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [pais,setPais] = useState('')

    function tratandoCelular(celular){
        const celularLimpo = celular.replace(/[^\d]/g, '');
        const n1 = celularLimpo.slice(0,2)
        const n2 = celularLimpo.slice(2,6)
        const n3 = celularLimpo.slice(6,11)
        let numero2 = n1

        if (n2) {
            numero2 += `-${n2}.`;
        }
    
        if (n3) {
            numero2 += `${n3}`;
        }
        return numero2
    }

    function tratandoCPF(cpf){
        const cpfLimpo = cpf.replace(/[^\d]/g, '')
        const p1 = cpfLimpo.slice(0, 3);
        const p2 = cpfLimpo.slice(3, 6);
        const p3 = cpfLimpo.slice(6, 9);
        const p4 = cpfLimpo.slice(9, 11);

        let resultado = p1;
        if (p2) resultado += `.${p2}`;
        if (p3) resultado += `.${p3}`;
        if (p4) resultado += `-${p4}`;

        return resultado

        }

    function handleRegInfos(e){
        const {name,value} = e.target
        switch (name){
            case 'Nome':
                setName(value)
                break
            case 'CPF':
                setCpf(tratandoCPF(value))
                break
            case 'celular':
                setCelular(tratandoCelular(value))
                break
            case 'email':
                setEmail(value)
                break
            case 'pass':
                setPass(value)
                break
            case 'pais':
                setPais(value)
                break
            default:
                break
        }
    }
    function handlePrintInfos(){
        console.log(`Nome: ${name} CPF: ${cpf} Celular: ${celular} Email: ${email} Senha: ${pass} País: ${pais}`)
    }

    

    return(
        <BackRegContainer>
            <LogoRegContainer>
                <img src={Logo} alt="Logo"></img>
            </LogoRegContainer>
            <FormRegContainer>
                <RegTexto>Registrar</RegTexto>
                <RegInput type="text" name ='Nome'placeholder="Nome" value={name} onChange={handleRegInfos}></RegInput>
                <RegInput type="text" name = 'CPF'placeholder="CPF" value={cpf} onChange={handleRegInfos}></RegInput>
                <RegInput type="text" name="email" placeholder="email" value={email} onChange={handleRegInfos} className={email.length > 20 ? 'fontpequena':''}></RegInput> 
                <RegInput type="text" name="celular" placeholder="celular" value={celular} onChange={handleRegInfos}></RegInput>
                <RegInput type="password" name="pass" placeholder="Senha" value={pass} onChange={handleRegInfos}></RegInput>
                <CompleteStyle>
                    <CountrySelect name='pais'></CountrySelect>
                </CompleteStyle>
                <RegisterButton onClick={handlePrintInfos}>Entrar</RegisterButton>
            </FormRegContainer>
        </BackRegContainer>



    )
}
export default Registro