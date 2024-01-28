import styles from "./form.module.css";

function Form() {
  
  return (
    <form>
      <h1 className={styles.LoginTexto}>Login</h1>
      <div className={styles.FormContainer}>
        <div>
          <input type="text" placeholder="Digite seu nome"></input>
        </div>
        <div>
          <input type="password" placeholder="Digite sua senha"></input>
        </div>
        <div>
          <a href="https://www.google.com/">
            <button type="submit">Entrar</button>
          </a>
          <br></br>
          <a href="https://www.google.com/">Esqueceu sua senha?</a>
        </div>
      </div>
    </form>
  );
}

export default Form;
