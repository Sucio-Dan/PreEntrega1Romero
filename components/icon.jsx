import {} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";


export const Icon = ({icon, css}) =>{
    return (
        <FontAwesomeIcon className ={css}  icon = {icon}/>
    );
}
