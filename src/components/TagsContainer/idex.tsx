import { useContext, useRef, useState } from "react";
import { 
    Back,
    BoxContainer,
    ButtonContainer,
    Container,
    IMG,
    Next,
    PrincipalContainer,
    Text
}
 from "./styles";
 import arrowRight from '../../assets/angulo-da-seta-direita.png';
 import arrowLeft from '../../assets/simbolo-da-linha-de-seta-para-a-esquerda.png';
import { MenuContext } from "../../context/menuContext";
import DropMenu from "../dropMenu/dropMenu";
import { CategoryContext } from "../../context/Categories";
import styled from "styled-components";

//  const List = [ 
//     'Tudo',
//     'Jogos',
//     'MarvelStudios',
//     'Suspenses', 
//     'Música', 
//     'Podcasts', 
//     'Notícias',
//     'Aovivo',
//     'Mixes',
//     'Batman',
//     'RPG',
//     'Anime',
//     'Pop',
//     'Rock',
//     'Paralelepipedo',
//     'Tudo',
//     'Jogos',
//     'MarvelStudios',
//     'Suspenses', 
//     'Música', 
//     'Podcasts', 
//     'Notícias',
//     'Aovivo',
//     'Mixes',
//     'Batman',
//     'RPG',
//     'Anime',
//     'Pop',
//     'Rock',
//     'Paralelepipedo',
// ]

const categoryButtons = [
    {name: 'Tudo', id: '0'},
    {name: 'Games', id: '20'},
    {name: 'Futebol', id: '17'},
    {name: 'Entretenimento', id: '24'},
    {name: 'Música', id: '10'},
    {name: 'Pessoas e blogs', id: '22'},
    {name: 'Automóveis e veículos', id: '2'},
    {name: 'Animais e pets', id: '15'},
    {name: 'Notícias e política', id: '25'},
    {name: 'Comédia', id: '23'},
    {name: 'Shorts', id: '26'},
    {name: 'Infantil', id: '1'},
    {name: 'Vida a dois', id: '22'},
    {name: 'Esportes', id: '17'},
    {name: 'Memes', id: '23'},
    {name: 'Jogos pc', id: '20'},
    {name: 'Jornais', id: '25'},
    {name: 'Kids', id: '1'},
    {name: 'Hits do momento', id: '10'},
    {name: 'História das civilizações', id: '22'},
    {name: 'Ciências', id: '15'},
    {name: 'Viagens pelo mundo', id: '24'},
    {name: 'Séries', id: '23'},
    {name: 'Novidades', id: '24'},
    {name: 'Educação', id: '1'}, 
    {name: 'Ciência e tecnologia', id: '2'}, 
    {name: 'Documentários', id: '26'}, 
    {name: 'Economia', id: '25'}, 
    {name: 'Investimentos e finanças', id: '20'}, 
    {name: 'Moda e estilo', id: '23'},
    {name: 'Comunicação', id: '10'},
    {name: 'Beleza', id: '24'},
  ];


const ITEM_WIDTH = 100;

function TagsContainer(){

    const {openMenu} = useContext(MenuContext);
    const {categoryId} = useContext(CategoryContext);

    const [scrollPosition, setScrollPosition] = useState(0)

    /**
     * o useRef por padrão vc escolhe uma tipagem(HTMLDivElement) e ele já trás o undefined acompanhado.
     * Foi usado o Null, por causa da tipagem dp HTMLDivElement, que pode trazer um elemento dentro da div
     * no primeiro momento ou valor null que é vazio, ou seja, sem add nenhum elemento.
     * O useRef é usado para armazenar valores que não mudam durante a execução do componente e que não 
     * precisam ser atualizados, comom por exemplo, a posição do scroll.
     * não precisou realizar a tipagem no arquivo style.ts, pois por padrão o ref, já é uma
     * propriedade, assim como o style, que se pode add nos componentes
     */

    const containerRef = useRef<HTMLDivElement>(null);

    const handScroll = (scrollAmount:number) => {
        /**
         * Foi usado uma condição/verificação parao containerRef.current, pois como mencionado
         * acima ele pode devolver um elemento HTML dentro da div, ou um valor null, que é vazio.
         * Se ele for null, não irá execultar a função, pois não tem elementos para
         *  realizar a ação.
         * Agora se tiver, ele irá prosseguir com a função para mudar o valor do scroll e movimentar os
         *  itens horizontalmente 
         */

          if (containerRef.current){
            const newScrollPosition = scrollPosition + scrollAmount;

            setScrollPosition(newScrollPosition);

            containerRef.current.scrollLeft = newScrollPosition
          }
    }

    const {setCategoryId} = useContext(CategoryContext);

    function searchCategory(id: string){
        setCategoryId(id)  
    }

   
        
      


        const [colorChange, setColorChange] = useState(false);
    
    return(
        
        <PrincipalContainer openMenu={openMenu}>

         <ButtonContainer onClick={() => {handScroll(-ITEM_WIDTH)}}>
            <Back><IMG src={arrowLeft}/></Back>
         </ButtonContainer>   
            <Container ref={containerRef}>
                {categoryButtons.map((item, idex) =>(
                    <BoxContainer color={colorChange}>
                        <Text onClick={() => searchCategory(item.id)} key={idex}>
                            {item.name}
                        </Text>
                    </BoxContainer>
                ))}
            </Container>
            <ButtonContainer onClick={() => {handScroll(ITEM_WIDTH)}}>
                <Next><IMG src={arrowRight}/></Next>
            </ButtonContainer>
        </PrincipalContainer>

       
    )
}

export default TagsContainer