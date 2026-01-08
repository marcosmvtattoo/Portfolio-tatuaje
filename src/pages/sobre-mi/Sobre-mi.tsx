
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { NavLink, Outlet, useNavigate } from "react-router"

export const Sobremi = () => {

    const navigate = useNavigate()

  return (
    <div>

    <div className="bg-gray-600 min-h-screen ">
         
      <header  className="bg-gray-400 w-full h-20 flex gap-4"> 
         <div className="flex gap-3 pt-6 ml-3 text-white ">
          <Button variant="ghost">
              <NavLink 
                 to={'/sobre-mi'}
                 className={({ isActive }) => isActive ? 'font-bold' : ''}
                 end={ true }>
                  Experiencia
              </NavLink>
          </Button>

          <Button variant="ghost">
            <NavLink 
               to={'/sobre-mi/informacion'}
               className={({ isActive }) => isActive ? 'font-bold' : ''}
               >
                  Informacion
            </NavLink>
          </Button>
           
         </div>

         <button
            className="fixed top-5 right-5 w-12 h-12 bg-gray-500 flex items-center justify-center border border-gray-300 hover:bg-gray-600 transition-colors"
            onClick={() => navigate('/')}>
            <ArrowRight className="w-7 h-7 text-gray-300"/>
          </button>
      </header>
        
        <main>
          <Outlet />
        </main>
        

           
      </div>    



    </div>
  )
}
