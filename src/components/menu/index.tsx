import {
    BoxExplication,
    ButtonIcon,
    Container,
    Divider,
    First,
    FirstTwo,
    List,
    MenuItem,
    SpanV,
    Secund,
    Third,
    Ul,
} from "./styles"
import NotificationIcon from '../../assets/sino.png';
import { useContext } from "react";
import { MenuContext } from "../../context/menuContext";
import VideoIcon from '../../assets/video.png';
import SeIscrever from '../../assets/se-inscrever.png';
import PlayList from '../../assets/lista-de-reproducao.png';
import AoVivo from '../../assets/viver.png';
import Hitorico from '../../assets/atividade.png';
import Perfil from '../../assets/perfil-de-usuario.png';
import YourVideos from '../../assets/botao-de-reproducao (1).png';
import WatchLater from '../../assets/relogio.png';
import Like from '../../assets/gostar.png';
import YourShorts from '../../assets/tesoura.png';
import Fire from '../../assets/fogo.png';
import Shopping from '../../assets/sacola-de-compras.png';
import Music from '../../assets/nota-musical.png';
import clapperboard from '../../assets/claquete.png';
import controll from '../../assets/controle-de-jogo.png';
import News from '../../assets/noticias.png';
import Cup from '../../assets/xicara.png';
import curso from '../../assets/ideia.png';
import PodCast from '../../assets/podcast.png';
import YouTubeKids from '../../assets/youtube.png';
import YouTubeMusic from '../../assets/youtube (1).png';
import YouTubeStudio from '../../assets/jogar.png';
import YouTubePremium from '../../assets/youtube (2).png';
import Config from '../../assets/configuracao.png';
import Flag from '../../assets/bandeira.png';
import Question from '../../assets/sinal-de-interrogacao.png';
import Exclamation from '../../assets/exclamacao-quadrada.png';
import { useNavigate } from "react-router-dom";


const itens1 = [
    {
        id: 1,
        name: 'Início',
        Icon: NotificationIcon,
        link:'/'
    },
    {
        id: 2,
        name: 'shorts',
        Icon: VideoIcon,
        link: '/shorts'
    },
    {
        id: 3,
        name: 'Inscrições',
        Icon: SeIscrever,
        link: '/inscrições'
    }
]

const itens1meio = [
    {
        id: 1,
        name: 'Início',
        Icon: NotificationIcon,
        link:'/'
    },
    {
        id: 2,
        name: 'shorts',
        Icon: VideoIcon,
        link: '/shorts'
    },
    {
        id: 3,
        name: 'Inscrições',
        Icon: SeIscrever,
        link: '/inscrições'
    },
    {
        id:4,
        name: 'Você',
        Icon: Perfil,
        link: '/'
    }
]

const itens2 = [{
    id:1,
    name:'Seu Canal',
    Icon: Perfil
},
{
    id:2,
    name:'Hitórico',
    Icon: Hitorico
},
{
    id:3,
    name:'Play List',
    Icon: PlayList
},
{
    id:4,
    name:'Seus Vídeos',
    Icon: YourVideos
},
{
    id:5,
    name:'Assistir mais Tarde',
    Icon: WatchLater
},
{
    id:6,
    name:'Vídeos com "Gostei"',
    Icon: Like
},
{
    id:7,
    name:'Seus Clipes',
    Icon: YourShorts
},

]

const Itens3 = [
    {
        id: 1,
        name: 'Ei Nerd',
        Icon: PlayList
    },
     {
        id: 2,
        name: 'Flow Podcast',
        Icon: PlayList
    },
     {
        id: 3,
        name: 'GameplayRJ',
        Icon: PlayList
    },
     {
        id: 4,
        name: 'The Nerds',
        Icon: PlayList
    },
     {
        id: 5,
        name: 'Nerd All Stars',
        Icon: PlayList
    },
     {
        id: 6,
        name: 'Nerd Land',
        Icon: PlayList
    },
     {
        id: 7,
        name: 'Flow Games',
        Icon: PlayList
    },
     {
        id: 8,
        name: 'Patriota',
        Icon: PlayList
    },
    {
        id: 9,
        name: 'Nando Moura',
        Icon: PlayList
    }, 
    {
        id: 10,
        name: 'Hero Mania',
        Icon: PlayList
    }
]

const Itens4 = [
    {
        id: 1,
        name: 'Em Alta',
        Icon: Fire
    },
     {
        id: 2,
        name: 'Shopping',
        Icon: Shopping
    },
     {
        id: 3,
        name: 'Música',
        Icon: Music
    },
     {
        id: 4,
        name: 'Filmes',
        Icon: clapperboard
    },
     {
        id: 5,
        name: 'Ao Vivo',
        Icon: AoVivo
    },
     {
        id: 6,
        name: 'Jogos',
        Icon: controll
    },
     {
        id: 7,
        name: 'Notícias',
        Icon: News
    },
     {
        id: 8,
        name: 'Esportes',
        Icon: Cup
    },
    {
        id: 9,
        name: 'Cursos',
        Icon: curso
    }, 
    {
        id: 10,
        name: 'Podcast',
        Icon: PodCast
    }
]

const Itens5 = [
    {
        id: 1,
        name: 'Youtube Premium',
        Icon: YouTubePremium
    },
    {
        id: 2,
        name: 'Youtube Studio',
        Icon: YouTubeStudio
    },
    {
        id: 3,
        name: 'Youtube Music',
        Icon: YouTubeMusic
    },
    {
        id: 4,
        name: 'Youtube Kids',
        Icon: YouTubeKids
    }
]
const Itens6  = [
    {
        id: 1,
        name: 'Configurações',
        Icon: Config
    },
    {
        id: 2,
        name: 'Denúncias',
        Icon: Flag
    },
    {
        id: 3,
        name: 'Ajuda',
        Icon: Question
    },
    {
        id: 4,
        name: 'Enviar Feedback',
        Icon: Exclamation
    }
]

function Menu() {
    const { openMenu } = useContext(MenuContext);
    const test = true
    const navigate = useNavigate();

    return (


        <Container openMenu={openMenu} >
           
                <MenuItem openMenu={openMenu}>

                    {itens1meio.map((item) => (
                        <FirstTwo openMenu={openMenu}>
                            <Ul>
                                <List key={item.id}  openMenu={openMenu} onClick={() => navigate(item.link)}>
                                    <ButtonIcon alt="" src={item.Icon} />
                                    <span>
                                        {item.name}
                                    </span>         
                                </List>
                            </Ul>
                        </FirstTwo>
                    ))}
            
                    {itens1.map((item) => (
                        <First openMenu={openMenu}>
                            <Ul>
                                <List key={item.id}  openMenu={openMenu} onClick={() => navigate(item.link)}>
                                    <ButtonIcon alt="" src={item.Icon} />
                                    <span>
                                        {item.name}
                                    </span>         
                                </List>
                            </Ul>
                        </First> 
                     ))}

                    { test && <Divider openMenu={openMenu}></Divider> }
                    
                    <SpanV openMenu={openMenu}>{openMenu? 'Você ➤' : ''} </SpanV>
                    { itens2.map((item) =>(
                        <Secund openMenu={openMenu}>
                            <ul>
                                <List key={item.id}  openMenu={openMenu}>
                                    <ButtonIcon alt="" src={item.Icon} />
                                    <span>
                                        {item.name}
                                    </span>         
                                </List>
                            </ul>
                        </Secund>
                     ))}
                
                    { test && <Divider openMenu={openMenu}></Divider> }

                    <SpanV openMenu={openMenu}>Inscrições</SpanV>
                    {Itens3.map((item) =>(
                        <Third openMenu={openMenu}>
                            <ul>
                                <List key={item.id}  openMenu={openMenu}>
                                    <ButtonIcon alt="" src={item.Icon} />
                                    <span>
                                        {item.name}
                                    </span>         
                                </List>
                            </ul>
                        </Third>
            
                    ))}

                    { test && <Divider openMenu={openMenu}></Divider> }

                    <SpanV openMenu={openMenu}>Explorar</SpanV>
                    {Itens4.map((item) =>(
                        <Third openMenu={openMenu}>
                            <ul>
                                <List key={item.id}  openMenu={openMenu}>
                                    <ButtonIcon alt="" src={item.Icon} />
                                    <span>
                                        {item.name}
                                    </span>         
                                </List>
                            </ul>
                        </Third>
                    ))}


                    { test && <Divider openMenu={openMenu}></Divider> }


                     <SpanV openMenu={openMenu}>Mais do YouTube</SpanV>
                        {Itens5.map((item) =>(
                            <Third openMenu={openMenu}>
                                <ul>
                                    <List key={item.id}  openMenu={openMenu}>
                                        <ButtonIcon alt="" src={item.Icon} />
                                        <span>
                                            {item.name}
                                        </span>         
                                    </List>
                                </ul>
                            </Third>
                       ))}

                        { test && <Divider openMenu={openMenu}></Divider> }
                        {Itens6.map((item) =>(
                            <Third openMenu={openMenu}>
                                <ul>
                                    <List key={item.id}  openMenu={openMenu}>
                                        <ButtonIcon alt="" src={item.Icon} />
                                        <span>
                                            {item.name}
                                        </span>         
                                    </List>
                                </ul>
                            </Third>
                        ))}

                            { test && <Divider openMenu={openMenu}></Divider> }

                            <BoxExplication openMenu={openMenu}>
                                Sobre impresa
                                Direitos autorais
                                Entre em contato
                                Criadores de conteúdo
                                Publicidade Desenvolvedores

                                Termos Privacidade
                                Política e segurança
                                Como funciona o YouTube
                                Testar os novos recursos
                            </BoxExplication>

                </MenuItem>  

           
        </Container>

    )
}

export default Menu;