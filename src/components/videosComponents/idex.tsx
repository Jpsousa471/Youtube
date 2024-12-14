import {
    ChannelImage,
    Container,
    ImageBanner,
    TextCard,
    TextContainer,
    Title,
    TitleContainer
} from "./stylesV";

function VideoComponent(){
    return(
        <Container>
                <ImageBanner src="data:image/jpeg;base64,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" />
            <TitleContainer>
                <ChannelImage>
                    JP
                </ChannelImage>
                <TextContainer>
                    <Title>Marília Mendonça - Leão - Decretos Reais 2</Title>
                    <TextCard>Marília Mendonça</TextCard>
                    <TextCard>109 Mi de vizualizações - há 2 meses</TextCard>
                </TextContainer>
           

            </TitleContainer>
        </Container>
    )
}

export default VideoComponent