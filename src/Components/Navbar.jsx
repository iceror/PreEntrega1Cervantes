import { Link } from "react-router-dom";
import CartWidget from "./Cart"



const NavBar = (props) => {
  return (<header>
    <div className="header">
      <Link to='/'><h1 className="header-brand" >{props.name}</h1></Link> 
      <nav className="header-navbar">
        <Link  className="header-link" to='/decoracion'>Decoración</Link>
        <Link  className="header-link" to='/cocina'>Cocina</Link>
        <Link  className="header-link" to='/recamara'>Recámara</Link>
        <Link  className="header-link" to='/bano'>Baño</Link>
        <Link  className="header-link" to='/oficina'>Oficina</Link>
        <Link  className="header-link" to='/articulos-hogar'>Articulos Hogar</Link>
      </nav>
      <CartWidget></CartWidget>
    </div>
  </header>
  )
}

export default NavBar;