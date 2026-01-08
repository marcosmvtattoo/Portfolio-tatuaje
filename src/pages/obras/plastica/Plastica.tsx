import { useNavigate } from "react-router"
import "./estilus.css"
import { ArrowRight, House } from "lucide-react"

export const Plastica = () => {

  const navigate = useNavigate()

  return (
    <div  className="bg-gray-600 h-full ">
      
      <header  className="nav bg-gray-400 w-full h-20 flex gap-4"> 
        <button
            className="fixed top-5 right-5 w-12 h-12 bg-gray-500 flex items-center justify-center border border-gray-300 hover:bg-gray-600 transition-colors"
            onClick={() => navigate('/obras')}
            >
                <ArrowRight className="w-7 h-7 text-gray-300"/>
        </button>

        <button
            className="fixed top-5 left-5 w-12 h-12 bg-gray-500 flex items-center justify-center border border-gray-300 hover:bg-gray-600 transition-colors"
            onClick={() => navigate('/')}
            >
                <House className="w-7 h-7 text-gray-300"/>
        </button>

     </header>

        <div className="info flex justify-center gap-10">
          
          <div className="mt-10 lg:ml-10">
            <img 
            src="/public/imagenes/Imagen pagina web-28.jpg"
            className="w-70 mb-10 md:w-100 border border-black "
            />
          </div>

           <p className="hidden lg:block text-white size-100  mt-10 ">
              “Gomu Gomu Nomi”,
              28/05/2025,
              tallado de marmoles y piedras calizas de direfentes colores y dimensiones,
              30 cm
              (2 meses)
              <p>Obra realizada en la asignatura de talla. Se trata de una obra realizada en mármol y piedras calizas pegadas 
                con resina. En este caso, esta obra está inspirada en un elemento que aparece en una serie de animación. Vemos una 
                pieza funcional que sirve como recipiente.
              </p>
          </p>
          
        </div>
        
        <div className="flex gap-10 justify-center">

          <p className="hidden lg:block text-white size-100 ">
           “Piston y Chatarra”,
            16/06/2024,
            soldadura de metales y chatarras de motores y bicicletas,
            (1 semana)
            <p>En este caso encontrqamos una obra realizada por cuenta propia. Esta construida a base de metal, 
              chatarra de motores y bicicletas, herramientas y un casquillo de bala.</p>
          </p>

          <div className="mb-10 lg:mr-10">
            <img 
            src="/public/imagenes/Imagen pagina web-19.jpg"
            className="w-70 md:w-100 border border-black "
            /> 
          </div>

        </div>
     
    </div>
  )
}
