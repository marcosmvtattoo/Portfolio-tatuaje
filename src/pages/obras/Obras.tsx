import "./estilus.css"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router"

import {
  Card,
  CardContent,
} from "@/components/ui/card"



export const Obras = () => {

    const navigate = useNavigate()


  return (
    <div>

      <div className="obra flex justify-center">
        <h1 className="text-7xl">Obra</h1>
      </div>
        
        <div className="bg-gray-600 min-h-screen p-4 flex items-center justify-center">

           <div className=" flex flex-col md:grid grid-cols-2 md:grid-cols-2 gap-10 mx-auto ">

              <Card 
              className="cursor-pointer w-[220px] h-[220px] hover:bg-gray-400 hover:text-white transition-colors"
              onClick={() => navigate('/obra/plastica')}
              >
                <CardContent className=" flex flex-col items-center justify-center gap-1 h-full px-0">
                  <img 
                  src="/public/imagenes/Imagen pagina web-28.jpg"
                  className="w-48 h-42 object-cover object-center border border-black rounded-lg"/>
                  <h2 className="font-medium text-lg">Obra plástica</h2>
                </CardContent>
              </Card>

              <Card className="cursor-pointer w-[220px] h-[220px] hover:bg-gray-400 hover:text-white transition-colors">
                <CardContent className=" flex flex-col items-center justify-center gap-1 h-full px-0"
                onClick={() => navigate('/obra/tatuaje')}
                >
                  <img 
                  src="public/imagenes/Imagen pagina web-18.jpg"
                  className="w-48 h-42 object-cover object-center border border-black rounded-lg"/>
                  <h2 className="font-medium text-lg">Tatuajes</h2>
                </CardContent>
              </Card>
           </div>
           
 
        </div>
          <button
            className="fixed top-5 right-5 w-12 h-12 bg-gray-500 flex items-center justify-center border border-gray-300 hover:bg-gray-600 transition-colors"
            onClick={() => navigate('/')}
            >
                <ArrowRight className="w-7 h-7 text-gray-300"/>
          </button>
           
           

    </div>
  )
}
