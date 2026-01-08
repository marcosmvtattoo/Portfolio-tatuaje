import { useNavigate} from "react-router"
import "./estilus.css"
import { ArrowRight} from "lucide-react"


export const Data = () => {
    
    const navigate = useNavigate()

  return (

    <div  className="bg-gray-600 h-full ">
      
      <header  className="nav bg-gray-400 w-full h-20 flex gap-4"> 
        <button
            className="fixed top-5 right-5 w-12 h-12 bg-gray-500 flex items-center justify-center border border-gray-300 hover:bg-gray-600 transition-colors"
            onClick={() => navigate('/')}
            >
                <ArrowRight className="w-7 h-7 text-gray-300"/>
        </button>

     </header>

        <div className="info flex justify-center gap-10">
          
          <div id="0" className="mt-10 lg:ml-10">
            <img 
            src="/public/imagenes/Imagen pagina web-30.jpg"
            className="w-70 mb-10 md:w-100 rounded-3xl"
            />
          </div>

           <p className="hidden lg:block text-white size-100  mt-10 ">
              “Ojo realista”,
              28/07/2025,
              sombreado con agujas rl, rs y round magnum,
              20 cm
              (20 horas)
              <p>Tatuaje realizado en piel sintéica como un ejercicio de práctica realizado en la académia de GangaTattoo.
              </p>
          </p>
          
        </div>

        <div className="info flex justify-center gap-10">
          
          <div id="1" className="mt-10 lg:ml-10">
            <img 
            src="/public/imagenes/Imagen pagina web-07.jpg"
            className="w-70 mb-10 md:w-100 rounded-3xl"
            />
          </div>

           <p className="hidden lg:block text-white size-100  mt-10 ">
              “Ramo de flores”,
              24/02/2025,
              sombreado con agujas rl, rs y round magnum,
              25 cm
              (5 horas)
              <p>Pieza realizada en el muslo de la clienta, se trata de un tatuaje en el que se representa un 
                pequeño ramo de flores.
              </p>
          </p>
          
        </div>
     
    </div>
  )
}