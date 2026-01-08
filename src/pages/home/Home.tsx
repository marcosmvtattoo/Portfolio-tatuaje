import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import "./estilus.css";


export const Home = () => {

   const navigate = useNavigate()


  return (
    <>
    <div>
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
         <header className="bg-gray-500 w-full h-15 ">
          <div className=" flex gap-6 pt-3  md:justify-center transition-all px-3">
              <Button  
                    onClick={() => navigate('/obras')}
                    variant="ghost"
                    className="text-gray-200 transition-colors"

                    >
                  Obras     
              </Button>

              <Button  
                    onClick={() => navigate('/sobre-mi')}
                    variant="ghost"
                    className="text-gray-200 transition-colors"
                    >
                  Sobre mi     
              </Button>

              <Button  
                    onClick={() => navigate('/contacto')}
                    variant="ghost"
                    className="text-gray-200 transition-colors"
                    >
                  Contacto     
              </Button>
          </div>


        </header>
        
        <main className="titulo">
          <h1 className="text-7xl md:text-8xl lg:text-9xl  z-10 transition-all">
            Marcos Martin 
            </h1>

          <h2 className="text-7xl md:text-8xl lg:text-9xl z-10 transition-all">
            Ventas
          </h2>

          <div className="titulo-img">

          </div>

          <div className="contacto flex gap-5 justify-center" style={{height: '350px'}}>
            <img 
             src="/public/imagenes/Imagen pagina web-07.jpg"  
             className="mt-3 mb-3 h-80 rounded-3xl"
             onClick={() => navigate('/data/Data/1')}
            />

            <img 
             src="/public/imagenes/Imagen pagina web-30.jpg"  
             className="hidden md:block mt-3 mb-3 h-80 rounded-3xl"
             onClick={() => navigate(`/data/Data/0`)}
            />

          </div>

          <p className="text-3xl md:text-4xl lg:text-5xl z-10 transition-all">
            Tatuador y artista multidisciplinar
          </p>

        </main>

        

      </div>
    </div>
    
      
    </>
  )
}
