import {FormContainer,LoginInput,LoginButton,LoginTexto,Form,EsqSenha} from "./styled.js"
import { useState } from "react";
import React from "react";

function FormFunc() {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  



  function handleNomeChange(e){
    setName(e.target.value)

  }
  function handlePassChange(e){
    setPass(e.target.value)
  }
  function handleInfos(e){
    e.preventDefault();
    console.log(`Nome:${name} Senha:${pass}`)
  }

  return (
    <Form onSubmit={handleInfos}>
      <LoginTexto>Login</LoginTexto>
      <FormContainer>
          <LoginInput type="text" placeholder="Digite seu nome" value={name} onChange={handleNomeChange}></LoginInput>
          <LoginInput type="password" placeholder="Digite sua senha" value={pass} onChange={handlePassChange}></LoginInput>
            <LoginButton>Entrar</LoginButton>
      
          <br></br>
          <EsqSenha>
            Esqueceu sua senha?
          </EsqSenha>
      </FormContainer>

    </Form>
  );
}
export default FormFunc;
