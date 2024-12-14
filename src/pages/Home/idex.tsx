import { useContext, useEffect, useState } from "react";
import TagsContainer from "../../components/TagsContainer/idex";
import { Container, MainContainer, PrincipalContainer } from "./styles";
import { MenuContext } from "../../context/menuContext";
import VideosCards from "../../components/videosCards/videosCards";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";
import { CategoryContext} from "../../context/Categories";
import Header from "../../components/header/idex";
import Menu from "../../components/menu";


function Home(){
   
    interface Videos {
        id: string;
        snippet: {
            title: string;
            thumbnails: {
                high: {
                    url: string
                }
                maxres: {
                    url: string;
                }
            }
            channelTitle: string;
            publishedAt: string;
        },
        statistics: {
            viewCount: string;
        }
    }

    const {openMenu} = useContext(MenuContext);
    const [videos, setVideos] = useState<Videos[]>([]);
    const {categoryId} = useContext(CategoryContext);

    useEffect(() => {
        load()
    },[categoryId])

    const API_KEY = 'AIzaSyBO6umweERKUHjG2Do8OH4WdSzE2VKuaOw'

    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`

    async function load() {
        try{
            const resposta = await axios.get(url)
            setVideos(resposta.data.items);
            console.log(resposta.data.items);
        }catch(erro){
            console.log(erro);
            toast.error('Algo de errado, não está certo');
        }
    }

    function formatViewCount(viewCount: number): string {
        if (viewCount >= 1000000) {
          return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`;
        } else if (viewCount >= 1000) {
          return `${(viewCount / 1000).toFixed(0)} mil visualizações`;
        } else {
          return `${viewCount} visualizações`;
        }
      }

    function getPublishedTime(publishedAt: string) {
        const now = moment();
        const publishedTime = moment(publishedAt);
        const diffDays = now.diff(publishedTime, 'days');

        if (diffDays <= 0) {
            return 'hoje';
        } else if (diffDays === 1) {
            return 'há 1 dia';
        } else if (diffDays <= 7) {
            return `há ${diffDays} dias`;
        } else if(diffDays <= 30) {
            const diffWeeks = Math.floor(diffDays / 7);
            if (diffWeeks === 1) {
                return 'há 1 semana';
            } else {
                return `há ${diffWeeks} semanas`;
            }
        } else if (diffDays <= 365) {
            const diffMonths = Math.floor(diffDays / 30);
            if( diffMonths === 1) {
                return 'há 1 mês'
            } else {
                return `há ${diffMonths} meses`;
            }
        } else {
            const diffYears = Math.floor(diffDays / 365);
            if (diffYears === 1) {
                return 'há 1 ano';
            } else {
                return `há ${diffYears} anos`;
            }
        }
    }
    
    return(
            <PrincipalContainer >
                <Header />
                <Menu />
                <MainContainer openMenu={openMenu}>
                    <TagsContainer/>
                    <Container openMenu={openMenu}>
                        {videos.map((video) =>(
                            <VideosCards 
                                title={video.snippet.title}
                                thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                                channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
                                channelName={video.snippet.channelTitle}
                                details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`}
                                key={video.id}
                            />
                        ))}                    
                        </Container>
                </MainContainer>
        </PrincipalContainer>
    )
}

export default Home