import { createContext, useEffect, useState } from "react";
import api from "../api";
import { toast } from "react-toastify";


export const VideoContext = createContext({} as any);

export const VideoStorage = ({children}: any) => {
    const [createVideo, setCreateVideo] = useState(false);
    const [video, setVideo] = useState({});
    const token = localStorage.getItem('token') as any;

    const createVideos = ( token: string,title: string, user_id: string, description: string, thumbnail: string, publishedAt: Date) => {
        if( title === '' || description === '' || thumbnail === '' ){
            toast.warning('Preencha todos os campos')

            return
        } 
        api.post('/videos/create-video', { title, description, thumbnail, publishedAt}, {headers: {"Authorization":`${token}`}} ).then(() =>{
            setCreateVideo(true);
            toast.success('Vídeo criado com sucesso');
            console.log('Vídeo criado com sucesso!');
        }).catch((error) => {
            console.log('Não foi possível criar o vídeo', error);
            toast.error('Não foi possível criar o vídeo');

        })
    }

   
    const getVideo = (token: string) => {
        api.get('/videos/get-videos', {headers:{"Authorization":`${token}`}}).then(({ data }) => {
            console.log(data);
            setVideo(data.videos);
            console.log(data.videos)
            setCreateVideo(true);
            toast.success('Video autenticado');
        }).catch((error) => {
            console.log('Video não autenticado', error);
            toast.error('Video não autenticado');

        })
    }

    useEffect(() =>{
       getVideo(token);
    }, [token]);


    const search = (search: string) => {
        api.get(`/videos/search?search=${search}`)
          .then(({ data }) => {
            console.log(data);
            setVideo(data);
            toast.success('Busca realizada com sucesso');
          })
          .catch((error) => {
            console.log('Erro na busca', error);
            toast.error('Erro na busca');
          });
      };
      

    return(
        <VideoContext.Provider value={{
            createVideos,
            search,
            getVideo
        }}>
            {children}
        </VideoContext.Provider>
    )


}





