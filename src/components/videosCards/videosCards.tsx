import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./videoCardsStyled"

interface Props {
    title: string
    thumbnail: string
    channelImage: string
    channelName: string
    details: string
  }


function VideosCards(props : Props){
    return (
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
              <TextCard>{props.channelName}</TextCard>
              <TextCard>{props.details}</TextCard>
            </TextContainer>
          </TitleContainer>
        </Container>
      )
    }


export default VideosCards