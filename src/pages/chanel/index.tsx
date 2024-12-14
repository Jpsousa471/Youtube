import { useNavigate } from "react-router-dom";
import { 
    Banner,
    BannerContainer,
    Button,
    ButtonContainer,
    Container,
    ContainerInformation,
    Div,
    IconId,
    Img,
    Li,
    ListRoom,
    Text,
    TextContainer,
    Title,
    Ul
 } from "./styled";
import SearchIcon from '../../assets/search.png';
import user from '../../assets/perfil-de-usuario.png';

 const Item = [{name:'Início'}, {name:'Vídeos'}, {name:'Shorts'}, {name:'Ao Vivo'}, {name:'Playlist'},{ name:'Comunidade'}, {name:'Loja'}]

function Chanel(){

  const navigate = useNavigate();

    return(
        <Container>
          <BannerContainer>
            <Banner />
          </BannerContainer>
          <ContainerInformation>
            <IconId alt="" src={user}/>
            <TextContainer>
                <Title>Jpkl9056</Title>
                <Text>Canal Jpkl9056 * 2,03 mi de inscritos * 1,6 mil de vídeos</Text>
                <Text>EMAIL COMERCIAL: Jpkl9056@gmail.com</Text>
                <Text style={{color: "blue"}}>lojinha.com.br</Text>  
                <ButtonContainer>
                <Button style={{marginRight: '10px'}} >Personalize seu canal</Button>
                <Button onClick={() => navigate('/createVideo')}>Gerenciar vídeos </Button>
                </ButtonContainer>              
            </TextContainer>
          </ContainerInformation>
          <ListRoom>
            {Item.map((key) => (
                <Ul>
                  <Div>
                    <Li>
                        {key.name}
                    </Li>
                  </Div>
                </Ul>
            ))}
                
            <Img alt="" src={SearchIcon}/>
                  
          </ListRoom>
        </Container>
    )
}

export default Chanel