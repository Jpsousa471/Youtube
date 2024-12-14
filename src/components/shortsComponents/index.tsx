import { 
    ChannelImage,
    Container, 
    ImageShorts,
    Text,
    TextContainer,
    Title,
    TitleContainer
} from "./styled"


function ShortsComponents(){
    return(
            <Container>
                <ImageShorts>
                    <ChannelImage>JP</ChannelImage>
                    <TitleContainer>
                        <TextContainer>
                            <Title>The Flash</Title>
                            <Text>Um banner do flash, este banner é do episódio 4 da segunda temporada da série.</Text>
                        </TextContainer>
                    </TitleContainer>
                </ImageShorts>
            </Container>
    )
}

export default ShortsComponents