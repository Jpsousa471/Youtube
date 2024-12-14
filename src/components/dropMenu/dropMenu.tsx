import {
    Li
} from "./styled";
import './styled.css';


interface Props{
    img: string,
    text: string
   
}

function DropMenu (props: Props){
    
        return(
            <Li className="dropdownItem">
                    <img alt="" src={props.img}></img>
                    <a>{props.text}</a>
                   
            </Li>
            
        )
}

export default DropMenu;