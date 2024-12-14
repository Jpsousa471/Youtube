import { useContext, useRef, useState } from "react";
import { 
    BoxCreate,
    Button,
    CardVideos,
    Container,
    ContainerModal,
    Exit,
    HeaderContainer,
    Input,
    InputEmpty,
    Logo,
    MessageContainer,
    Span,
    UserVideosContainer
 } from "./styled";
import { VideoContext } from "../../context/videoContext";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import LogoYt from '../../assets/YouTube-Logo.png';
import Header from "../../components/header/idex";
import Menu from "../../components/menu";
import CreateVideoCards from "../../components/CreateVideoCards";

function CreateVideo(){

    interface Videos {
        id: string
        title: string
        thumbnail: string
        description: string
        publishedAt: string
    }


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('')

    const {createVideos} = useContext(VideoContext);
    const {token, user} = useContext(UserContext);

    const thumbnailRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    const [thumbnailValid, setThumbnailValid] = useState(true)
    const [titleValid, setTitleValid] = useState(true)
    const [descriptionValid, setDescriptionValid] = useState(true)
  

    const USER_ID = user.id;


    const createMyVideo = () => {
      const date: Date = new Date();

      if (thumbnail.trim() !== '') {
        setThumbnailValid(true)
      }
      if (title.trim() !== '') {
        setTitleValid(true)
      }
      if (description.trim() !== '') {
        setDescriptionValid(true)
      }
      if (thumbnail.trim() === '' && title.trim() === '' && description.trim() === '') {
        setThumbnailValid(false)
        setTitleValid(false)
        setDescriptionValid(false)
        if (thumbnailRef.current) {
          thumbnailRef.current.focus();
          return;
        }
      } else if (thumbnail.trim() === '') {
        setThumbnailValid(false)
        if (thumbnailRef.current) {
          thumbnailRef.current.focus()
          return;
        }
      } else if (title.trim() === '') {
        setTitleValid(false)
        if (titleRef.current) {
          titleRef.current.focus()
          return;
        }
      } else if (description.trim() === '') {
        setDescriptionValid(false)
        if (descriptionRef.current) {
          descriptionRef.current.focus()
          return;
        }
      }
      else {
        createVideos( title, USER_ID, description, thumbnail, date)
        axios.defaults.headers.common['Authorization'] = token
        console.log(token, USER_ID, title, description, thumbnail, date)
        setOpenBox(true)
        clearInputs()
      }
    }

    const clearInputs = () =>{
        if (thumbnailRef.current) {
            thumbnailRef.current.value = ''
            thumbnailRef.current.focus()
            setThumbnail('')
        }
        if (titleRef.current) {
            titleRef.current.value = ''
            titleRef.current.focus()
            setTitle('')
        }
        if (descriptionRef.current) {
            descriptionRef.current.value = ''
            descriptionRef.current.focus()
            setDescription('')
        }
    }

    function getTimeDifference(publishedAt: string): string {
        const diff = Date.now() - Date.parse(publishedAt);
        const minute = 60 * 1000;
        const hour = 60 * minute;
        const day = 24 * hour;
        const week = 7 * day;
        const month = 30 * day;
        const year = 12 * month;
    
        if (diff < minute * 5) {
          return "Agora";
        } else if (diff < hour) {
          const minutes = Math.floor(diff / minute);
          return `Há ${minutes} ${minutes < 2 ? "minuto" : "minutos"}`;
        } else if (diff < day) {
          const hours = Math.floor(diff / hour);
          return `Há ${hours} ${hours < 2 ? "hora" : "horas"}`;
        } else if (diff < week) {
          const days = Math.floor(diff / day);
          return `Há ${days} ${days < 2 ? "dia" : "dias"}`;
        } else if (diff < month) {
          const weeks = Math.floor(diff / week);
          return `Há ${weeks} ${weeks < 2 ? "semana" : "semanas"}`;
        } else if (diff < year) {
          const months = Math.floor(diff / month);
          return `Há ${months} ${months < 2 ? "mês" : "meses"}`;
        } else {
          const years = Math.floor(diff / year);
          return `Há ${years} ${years < 2 ? "ano" : "anos"}`;
        }
      }


    const closeModal = () => {
        clearInputs()
        setThumbnailValid(true)
        setTitleValid(true)
        setDescriptionValid(true)
        setOpenBox(true)
      }

    const [openBox, setOpenBox] = useState(true);

    return(
        <Container>
            <Header />
            <Menu />
            <HeaderContainer>
                <Logo alt="" src={LogoYt}/>
                <Span>Crie seus vídeos</Span>
                <Button onClick={() => setOpenBox(!openBox)} > Crie seu vídeo</Button>
            </HeaderContainer>
            <BoxCreate openBox={openBox}>
                <ContainerModal>
                    <Exit onClick={() => closeModal()}>X</Exit>
                    <Input 
                    type="text" 
                    placeholder="URL da thumbnail ex: https://images.server.com/120/1209131.jpg" 
                    ref={thumbnailRef} 
                    valid={thumbnailValid}
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                    />
                     <MessageContainer>
                        <InputEmpty valid={thumbnailValid}>
                        Digite a URL da thumbnail
                        </InputEmpty>
                     </MessageContainer>
                    <Input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <MessageContainer>
                        <InputEmpty valid={titleValid}>
                        Digite o título do vídeo
                        </InputEmpty>
                     </MessageContainer>
                    <Input  
                    type="text" 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    />
                    <MessageContainer>
                        <InputEmpty valid={descriptionValid}>
                        Digite a descrição do vídeo
                        </InputEmpty>
                     </MessageContainer>
                    <Button onClick={() => createMyVideo()}> Criar Vídeo</Button>
                </ContainerModal>
            </BoxCreate>
            {Array.isArray(createVideos) ?(
                createVideos.map((video: Videos) =>
                    <CreateVideoCards 
                        title={video.title}
                        thumbnail={video.thumbnail}
                        channelImage={user && user.name? user.name.charAt(0).toUpperCase() : ''}
                        details={video.description}
                        publishedAt={getTimeDifference(video.publishedAt)}
                        key={video.id}
                    />)
                )
                :
                (
                    <h1>Esse canal não possui vídeos</h1>
            )}
        </Container>
    )
}

export default CreateVideo