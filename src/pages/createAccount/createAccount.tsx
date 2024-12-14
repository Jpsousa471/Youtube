import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../context/userContext";
import Google from '../../assets/google.png';
import {
    Button,
     ButtonContainer,
     CheckBoxContainer,
     Container, 
     Div, 
     Diva, 
     G0ogle, 
     Input, 
     Pone, 
     Ptrhee, 
     Ptwo, 
     WhiteBox
    } from "./styled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CreateAccount(){

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () =>{
    setShowPassword(!showPassword);
  }

    const { createUser} = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comparePassword, setComparePassword] = useState('');
    const [validName, setValidName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [samePassword, setSamePassword] = useState(true)
    const navigate = useNavigate();

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const comparePasswordRef = useRef<HTMLInputElement>(null);
  

    
  useEffect(() => {
    if (nameRef.current !== null){
      nameRef.current.focus();
    }
  }, [])

    // const handleCreateUser = async () => {
    //     await createUser(name, email, password);
    //     navigate('/login');
    //   };
    
    
// const de verificação
// const handleCreateUsers = () => {
//     if (name === '' || email ==='' || password ==='') {
//         toast.error('Preencha todos os campos!');
//     }
//     createUser(name, email, password);
//     navigate('/login');

// }

// const de verificação com validação de email e senha 

  const handleCreateUserPlay = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-zA-Z0-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (name.trim() !== ''){
    setValidName(true)
  }

  if (email.trim() !== ''){
    setValidEmail(true)
  }
  
  if (password.trim() !== ''){
    setValidPassword(true)
  }

  if(name.trim() === '' && email.trim() === '' && password.trim() === ''){
    setValidName(false)
    setValidEmail(false)
    setValidPassword(false)
    if (nameRef.current){
      nameRef.current.focus();
    }
    return;
  }

  else if(name.trim() === ''){
    setValidName(false)
    toast.warning('Preencha o campo');
    if(nameRef.current){
      nameRef.current.focus();
    }
    return;
  }

  else if (!emailRegex.test(email)) {
    setValidEmail(false)
    toast.warning('E-mail inválido!');
    if(emailRef.current){
      emailRef.current.focus()
    }
    return;
  }

  else if (!passwordRegex.test(password)) {
    setValidPassword(false)
    toast.warning('Senha inválida! Deve conter:');
    toast.warning('- Pelo menos 8 caracteres');
    toast.warning('- Letras (maiúsculas e minúsculas)');
    toast.warning('- Números');
    toast.warning('- Caracteres especiais (@, $, !, %, *, #, ?, &)');
    if (passwordRef.current){
      passwordRef.current.focus()
    }
    return;
  }

  else if (comparePassword.trim() === '') {
    setValidPassword(false)
    if (comparePasswordRef.current) {
      comparePasswordRef.current.focus()
      return;
    }
  }

  else if (password !== comparePassword) {
    setValidPassword(false)
    setSamePassword(false)
    if (comparePasswordRef.current) {
      comparePasswordRef.current.focus()
    }
    return;
  }

  createUser(name, email, password);
  navigate('/login');
} 



    return(
        <Container>
        <WhiteBox>
            <Diva>
                <G0ogle alt="" src={Google}/>
                Crie uma conta Google
                <span style={{fontSize:'16px', marginTop:'-10px', marginLeft: '3px'}}>Introduza o seu nome</span>
            </Diva>

            <Div>
                <Input
                 valid={validName} 
                 type="text"  
                 placeholder="Name"  
                 value={name} 
                 ref={nameRef}
                 onChange={(e) => setName(e.target.value)} 
                 />
                <Pone valid={validName}>Preencha o campo</Pone>
                <Input 
                valid={validEmail}
                type="email"  
                placeholder="Email" 
                value={email}
                ref={emailRef} 
                onChange={(e) => setEmail(e.target.value)} 
                />
                <Ptwo valid={validEmail}>{
                  validEmail?
                  'Digite seu email'
                  :
                  'O formato dessse email está inválido, digete um email válido'
                  }</Ptwo>
                <Input 
                valid={validPassword} 
                type={showPassword? 'text' : 'password'} 
                placeholder="Password" 
                value={password} 
                ref={passwordRef}
                onChange={(e) => setPassword(e.target.value)} 
                />
                <Ptrhee valid={validPassword}>  Mínimo de 8 caracteres, sendo ao menos 1 especial "@#$", 1 Maiúsculo e minúsculo e números</Ptrhee>
                <Input 
                valid={validPassword}
                type={showPassword? 'text' : 'password'}
                value={comparePassword}
                ref={comparePasswordRef}
                placeholder="Confirmar"
                onChange={(e) =>{
                  setComparePassword(e.target.value)
                }}
                onKeyDown={(e) =>{
                  if (e.key === '') {
                    e.preventDefault();
                  }
                  if (e.key === 'Enter') {
                    createUser();
                  }
                }}
                />
                <CheckBoxContainer>
                  <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword} />
                  <label htmlFor="show-password">Mostrar Senha</label>
                </CheckBoxContainer>
                <ButtonContainer >
                    <Button onClick={() =>handleCreateUserPlay()}>Criar conta</Button>
                </ButtonContainer>
            </Div>

        </WhiteBox>
    </Container>
    )
}

export default CreateAccount