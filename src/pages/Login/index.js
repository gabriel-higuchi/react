    import FormFunc from "../../components/FormLogin";
    import Logo from "../../assets/LogoNova.svg"
    import LogoBranca from "../../assets/Branco.svg"
    import { BackContainer, LogoContainer, LoginContent, SwitchButton } from "./styled";
    import { useState } from "react";


    function Login() {

        const [Bg, setBG] = useState(false);
        const [logo, setLogo] = useState(false);
        const alternado = "url('https://wallpaperaccess.com/full/806443.jpg')";
        const original = "url('https://img.freepik.com/fotos-gratis/textura-do-cimento_1194-5341.jpg?w=1380&t=st=1706509953~exp=1706510553~hmac=69c8becd2836ab9196812c6ff7b8011c01204c0387f71abbed46d0e34f26f40d')";

        
        const handleChangeBG = () =>{
            setBG(!Bg);
            setLogo(!logo)
        }
        
        return (
            <BackContainer style={{backgroundImage: Bg ? alternado:original}}>
                <SwitchButton>
                    <input type="checkbox" onChange={handleChangeBG}></input>
                    <span></span>
                </SwitchButton>
                <LogoContainer>
                    <header>
                        <img src={logo ? LogoBranca:Logo} alt="Logo"></img>
                    </header>
                </LogoContainer>
                <LoginContent>
                    <FormFunc/>
                </LoginContent>
            </BackContainer>
        );
    }

    export default Login;
