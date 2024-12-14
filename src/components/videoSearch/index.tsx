import { ChannelContainer, ChannelImage, Container, DescriptionContainer, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styled"

interface Props {
    title: string
    thumbnail: string
    channelImage: string
    channelName: string
    details: string
    description: string
  }

function VideoSearch(props: Props) {

    return(
        <Container>
          <ImageBanner style={{backgroundImage: `url(${props.thumbnail})`}}></ImageBanner>
          <TitleContainer>
            <TextContainer>
              <Title>{props.title}</Title>
              <TextCard>{props.details}</TextCard>
            </TextContainer>
              <ChannelContainer>
                <ChannelImage>
                  {props.channelImage}
                </ChannelImage>
              </ChannelContainer>
              <TextCard>{props.channelName}</TextCard>
            <DescriptionContainer>
              <TextCard>
                {props.description}
              </TextCard>
            </DescriptionContainer>
          </TitleContainer>
        </Container>
    )
}

export {VideoSearch}