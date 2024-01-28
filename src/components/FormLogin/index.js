import {FormContainer,LoginInput,LoginButton,LoginTexto,Form,EsqSenha} from "./styled.js"
import { useState } from "react";




function FormFunc() {
  const [color,setColor] = useState("black")

  function handleChangeColor(e){
    setColor(e.target.value)
  }


  return (
    <Form>
      <LoginTexto>Login</LoginTexto>
      <FormContainer>
          <LoginInput type="text" placeholder="Digite seu nome"></LoginInput>
          <LoginInput type="password" placeholder="Digite sua senha"></LoginInput>
            <LoginButton type="submit" color={color}>Entrar</LoginButton>
            <LoginInput type="color" value={color} onChange={handleChangeColor}></LoginInput>
          <br></br>
          <EsqSenha href="https://www.google.com/">Esqueceu sua senha?</EsqSenha>
      </FormContainer>

    </Form>
  );
}

export default FormFunc;
