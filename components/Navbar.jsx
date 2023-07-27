import CardWidget from "./CardWidget";
import "./NavBar.css"
import Button from "./button";


export function Navbar (){
     return <> <nav className="navbar" >
        <h3>Smarphones</h3>
        
        <Button texto = "remeras" />
        <Button texto = "Buzos" />
        <Button texto = "Pantalones" /> 
        <CardWidget items ={100}/>
     </nav>
 </>;

}

