import {
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonContainer2,
    ButtonIcon,
    ButtonIcon2,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    ImgLogin,
    ButtonLoginContainer,
    DropDownMenu,
    H3,
    SpanH3,
    Uli,
    DropDownMenu2,
} from "./styled";
import hamburgerIcon from './../../assets/menu-hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone-gravador.png';
import VideoIcon from '../../assets/video.png';
import NotificationIcon from '../../assets/sino.png';
import LoginEnter from '../../assets/do-utilizador.png';
import Google from '../../assets/google (1).png';
import ChangePerfil from '../../assets/perfil-on-line.png';
import Exit from '../../assets/sair.png';
import AoVivo from '../../assets/viver.png';
import Send from '../../assets/toque.png';
import CreatePost from '../../assets/adicionar-postagem.png';
import YTPremium from '../../assets/musica-do-youtube.png';
import Shopping from '../../assets/cifrao.png';
import UserData from '../../assets/dados de usuário.png';
import Theme from '../../assets/lua.png';
import Translator from '../../assets/tradutor.png';
import Security from '../../assets/seguro.png';
import { useContext, useEffect, useRef, useState } from "react";
import { MenuContext } from "../../context/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import DropMenu from "../dropMenu/dropMenu";
import { DropMenuContext } from "../../context/DropMenuContext";
import { DropMenuContext2 } from "../../context/DropMenuContext2";
import { VideoContext } from "../../context/videoContext";
import { toast } from "react-toastify";
import { SearchContext } from "../../context/searchContext";




function Header() {
    const {openMenu, setOpenMenu} = useContext(MenuContext);
    const {login, logOut, user} = useContext(UserContext);
    const {search} = useContext(VideoContext);
    const {openDropMenu, setOpenDropMenu} = useContext(DropMenuContext);
    const {openDropMenus, setOpenDropMenus} = useContext(DropMenuContext2);
    const [inputValue, setInputValue] = useState('');
    const [clearButton, setClearButton] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const {setSearch} = useContext(SearchContext);
    const navigate = useNavigate();


    const Search = () => {
        setOpenSearch(true)
        if(inputRef.current) {
            inputRef.current.focus()
        }
    }

    function handleInput(inputValue: string) {
       setInputValue(inputValue)
       if(inputValue === '') {
        setClearButton(false)
       } else {
        setClearButton(true)
       }
    }

    const inputRef = useRef<HTMLInputElement>(null);

    const clearInput = () => {
        setInputValue('')
            setClearButton(false)
            if(inputRef.current) {
                inputRef.current.focus();
            }
    }

    let menuRef = useRef<HTMLButtonElement | null>(null);
    let menuRef2 = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
              setOpenDropMenu(false);
            }
          };
          
      document.addEventListener("mousedown", handler);
    
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    });

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef2.current && !menuRef2.current.contains(e.target as Node)) {
              setOpenDropMenus(true);
            }
          };
          
      document.addEventListener("mousedown", handler);
    
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    });

   


return(
    <>
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin= '0 10px 0 0'>
                    <ButtonIcon  alt="" src={hamburgerIcon}/>
                </ButtonContainer>
                <img 
                    style={{cursor: 'pointer', width: '100px'}}
                    alt=""
                    src={Logo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput  
                        ref={inputRef}
                        value={inputValue}
                        placeholder="Pesquisar"
                        onChange={(e) => {
                            handleInput(e.target.value)
                        }}

                        onKeyDown={(e) => {
                            if( e.key === 'Enter') {
                                setSearch(inputValue)
                                navigate('/search')
                                setOpenSearch(false)
                            }
                        }}
                    />
                </SearchInputContainer>
                <SearchButton
                onClick={() =>{
                    if(inputValue.trim() === '') {
                        toast.error('Digete algo antes de tentar')
                        return;
                    }

                    setSearch(inputValue)
                    navigate('/search')
                }}
                >
                    <ButtonIcon  alt="" src={SearchIcon}/>
                </SearchButton>
                <ButtonContainer margin= '0 0 0 10px'>
                            <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
            <ButtonContainer2 margin= '0 0 0 10px' login={login}  onClick={() =>setOpenDropMenus(!openDropMenus) }>
                <ButtonIcon2 alt="" src={VideoIcon} login={login}/>
            </ButtonContainer2> 
            <DropDownMenu2 dropMenus={openDropMenus} ref={menuRef2 as React.RefObject<HTMLButtonElement>}>
                <DropMenu img={Send} text ={"Enviar vídeo"} ></DropMenu>
                <DropMenu img={AoVivo} text ={"Transmitir ao vivo"} ></DropMenu>
                <DropMenu img={CreatePost} text ={"Criar postagem"}></DropMenu>
           </DropDownMenu2>

            <ButtonContainer2 margin= '0 0 0 10px' login={login}>
                <ButtonIcon2 alt="" src={NotificationIcon} login={login}/>
            </ButtonContainer2>

            {login? 
            <>
                    <ButtonContainer margin= '0 0 0 10px' onClick={() =>setOpenDropMenu(!openDropMenu)}>
                    {user && user.name ? user.name.charAt(0).toUpperCase() : ''}
                    </ButtonContainer>
            
                    <DropDownMenu dropMenu={openDropMenu} ref={menuRef as React.RefObject<HTMLButtonElement>}>
                        <H3>{user.name}<br/><SpanH3>{user.email}</SpanH3></H3>
                        <span style={{color: 'blue', cursor: 'pointer'}} onClick={() => navigate('/channel')}>Acessar seu canal</span>
                        <Uli>
                            <DropMenu img={Google} text ={"Conta do Google"} ></DropMenu>
                            <DropMenu img={ChangePerfil} text ={"Mudar de conta"} ></DropMenu>
                           <div onClick={() =>logOut()}><DropMenu img={Exit} text ={"Sair"}></DropMenu></div>
                            <DropMenu img={YTPremium} text ={"YouTube Studio"} ></DropMenu>
                            <DropMenu img={Shopping} text ={"Compras e assinaturas"} ></DropMenu>
                            <DropMenu img={UserData} text ={"Seus dados no YouTube"} ></DropMenu>
                            <DropMenu img={Theme} text ={"Aparência: tema do dispositivo"} ></DropMenu>
                            <DropMenu img={Translator} text ={"Idioma: Potuguês"} ></DropMenu>
                            <DropMenu img={Security} text ={"Modo restrito: desativado"} ></DropMenu>
                        </Uli>  
                    </DropDownMenu>
            </>
                    :
                    <ButtonLoginContainer onClick={() => navigate('/login')}>
                        <ImgLogin alt="" src={LoginEnter}/>
                        Fazer login
                    </ButtonLoginContainer>
                }
            </HeaderButton>

        </Container>

    </>

)
}

export default Header;