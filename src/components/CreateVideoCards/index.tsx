import { 
    ChannelImage, 
    Container, 
    ImageBanner, 
    TextCard, 
    TextContainer, 
    Title, 
    TitleContainer 
} from "./stled"

interface Props {
    title: string
    thumbnail: string
    channelImage: string
    details: string
    publishedAt: string
}

function CreateVideoCards (props: Props){
    
    return(
       <Container>
        <ImageBanner alt="thumbnail" src={props.thumbnail}/>
        <TitleContainer>
        <div style={{width: '50px', height: '50px'}}>
            <ChannelImage>
              {props.channelImage}
            </ChannelImage>
            </div>
            <TextContainer>
            <Title>{props.title}</Title>
              <TextCard>{props.details}</TextCard>
              <TextCard>{props.publishedAt}</TextCard>
            </TextContainer>
        </TitleContainer>
       </Container>
        
    )
}

export default CreateVideoCards;