import Header from "../../components/header/idex";
import Menu from "../../components/menu";
import ShortsComponents from "../../components/shortsComponents";
import TagsContainer from "../../components/TagsContainer/idex";
import { 
  Container, 
  PrincipalContainer, 
  TagContainer 
} from "./styled";


function Shorts(){
    return(
      <PrincipalContainer>
      <Header />
      <Menu />
      <Container>
        <TagsContainer />
        <ShortsComponents />
        <ShortsComponents />
        <ShortsComponents />
        <ShortsComponents />
        <ShortsComponents />
        <ShortsComponents />
        <ShortsComponents />
        <ShortsComponents />
        <ShortsComponents />
        </Container>
      </PrincipalContainer>
    )
}

export {Shorts}