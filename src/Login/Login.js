import styles from "/home/gabriel/Documents/site PES/site/src/Login/Login.module.css";
import Form from "./Form";
import Logo from '../assets/LogoNova.svg'

function Login() {
  return (
    <div className={styles.backContainer}>
      <div className={styles.loginContainer}>
        <header>
          <img src = {Logo}></img>
        </header>
    </div>

      <div className={styles.loginContent}>
        <Form className={styles.FormContainer}></Form>
      </div>
    </div>
  );
}

export default Login;
