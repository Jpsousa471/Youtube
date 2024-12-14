import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../context/userContext";
import Google from '../../assets/google.png';
import {
    Button,
     ButtonContainer,
     ButtonTwo,
     CheckBoxContainer,
     Container, 
     Div, 
     Diva, 
     G0ogle, 
     Input, 
     InputSpan, 
     WhiteBox
    } from "./styled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Login(){

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () =>{
    setShowPassword(!showPassword);
  }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const{handleLogin} = useContext(UserContext)
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const navigate = useNavigate()

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (emailRef.current !== null){
            emailRef.current.focus();
        }
      }, [])

    const goHome = async() => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (email.trim() !== ''){
            setValidEmail(true);
        }

        if (password.trim() !== ''){
            setValidPassword(true);
        }

       if(!email && !password){
        setValidEmail(false);
        setValidPassword(false);
        toast.warning('Preencha todos os campos');
        return;
       }

       else if (email.trim() === ''){
            setValidEmail(false);
            if (emailRef.current){
                emailRef.current.focus()
            }
            return;
         }
        
        else if(!emailRegex.test(email)){   
            setValidEmail(false);
            toast.error('Formato de email inválido')
            if (emailRef.current){
                emailRef.current.focus()
            }
            return;
        }

        else if (password.trim() === '' || password.length< 8 ){
            setValidPassword(false);
            if(passwordRef.current){
                passwordRef.current.focus()
            }
            return;
        }

        await handleLogin(email, password);
        navigate('/');
    }

    return(
        <Container>
            <WhiteBox>
                <Diva>
                    <G0ogle alt="" src={Google}/>
                    Login
                    <span style={{fontSize:'16px', marginTop:'-5px'}}>Continuar para o YouTube</span>
                </Diva>

                <Div>
                    <Input 
                    valid={validEmail}
                    type="email" 
                    id="email" 
                    value={email} 
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email"
                    onKeyDown={(e) =>{
                        if (e.key === 'Enter') {
                            goHome()
                        }
                    }}
                    />
                    <InputSpan valid={validEmail}>
                    Email incorreto</InputSpan>

                    <Input 
                    valid={validPassword}
                    type={showPassword? 'text' : 'password'}
                    id="password" 
                    value={password} 
                    ref={passwordRef}
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Senha" 
                    onKeyDown={(e) =>{
                        if (e.key === 'Enter') {
                            goHome()
                        }
                    }}
                    />
                    <InputSpan valid={validPassword}>
                    Senha incorreta</InputSpan>

                <CheckBoxContainer>
                  <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword} />
                  <label htmlFor="show-password">Mostrar Senha</label>
                </CheckBoxContainer>

                    <ButtonContainer>
                        <Button onClick={() => navigate('/createAccount')}>Criar conta</Button>
                        <ButtonTwo onClick={() => handleLogin(email, password)} onClickCapture={() =>goHome()} >Login</ButtonTwo>
                    </ButtonContainer>
                </Div>

            </WhiteBox>
        </Container>
    )
}

export default Login