import NavBar from "./Components/Navbar"
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
    <div>
      <NavBar name='La tiendita'>
      </NavBar>

      <Routes>
        {/* //Listado de componentes Route */}
        <Route path="/" element={<ItemListContainer/>} />
          <Route path="/:categoryId" element={<ItemListContainer/>} />
          <Route path="/:categoryId/:itemId" element={<ItemDetailContainer />}/>
          <Route path="*" element={ <Navigate to={"/"}/>}/>
        </Routes>

      {/* <Footer></Footer> */}
    </div>
    </BrowserRouter>
  )
}

export default App
