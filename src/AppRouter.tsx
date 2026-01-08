import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { Contacto, Data, Experiencia, Home, Informacion, Obras, Plastica, Sobremi, Tatuaje, } from "./pages"




export const AppRouter = () => {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/obras" element={ <Obras />} />
        <Route path="/contacto" element={ <Contacto />} />

        <Route path="/sobre-mi" element={ <Sobremi />}>
             <Route index element={ <Experiencia/> }/>
             <Route path="/sobre-mi/informacion" element={ <Informacion/> } />

        </Route>

        <Route path="/obra/tatuaje" element={ <Tatuaje/> }/>
        <Route path="/obra/plastica" element={ <Plastica/> }/>

        <Route path="/data/Data/:id" element={ <Data/> }/>

        

        <Route path="*" element={ <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
