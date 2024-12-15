import { createContext, useEffect, useState } from 'react';
import api from '../api';
import { toast } from 'react-toastify';


export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {

    const [create, setCreate] = useState(false);
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);


    const createUser = (name: string, email: string, password: string) => {
        if(name=== '' || email=== '' || password=== '' ){
            toast.warning('Preencha todos os campos')
            return;
        }

        api.post('/user/sign-up', {name, email, password}).then(() =>{
            toast.success('Usuário cadastrado com sucesso');
            setCreate(true);
            console.log('Usuário criado com sucesso!');
        }).catch((error) => {
            // if(error.response.status === 400) {
            //     toast.warning('Este email já existe, tente outro');
            //      return;
            //  } 
                console.log('Não foi possível realizar o cadastro', error);
                toast.error('Não foi possível realizar o cadastro');
        })
    }


    const getUser = (token: string) => {
        api.get('/user/get-users', {headers:{"Authorization":`${token}`}}).then(({ data }) => {
            console.log(data);
            setUser(data.user);
            console.log(data.user)
            setLogin(true);
            toast.success('Usuário autentificado');
        }).catch((error) => {
                console.log('Usuário não autentificado', error);
                toast.error('Usuário não autentificado');
        })
    }

    useEffect(() => {
        getUser(token);
    }, [token])


    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data }) =>{
            setLogin(true);
            // console.log('token', data.token);
            // toast.success(data.token);
            localStorage.setItem('token', data.token);
            // console.log(localStorage);
            setToken( data.token);
            getUser(data.token);
            toast.success('Logado(a) com sucesso!');
        }).catch((error) => {
            console.log('Não foi possível fazer o login', error);
            toast.error('Não foi possívle realizar o seu login');
        })
    }


    return(
        <UserContext.Provider value={{
            create,
            login,
            user,
            token,
            handleLogin,
            logOut,
            createUser,
            getUser
        }}>
            {children}
        </UserContext.Provider>
    )
}