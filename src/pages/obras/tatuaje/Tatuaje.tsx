import "./estilus.css"
import { ArrowRight, House } from "lucide-react"
import { useNavigate } from "react-router"


export const Tatuaje = () => {

      const navigate = useNavigate()

  return (
    <div className="bg-gray-600 min-h-screen">
        <header  className="bg-gray-400 w-full h-20 flex gap-4"> 
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
        
        <div className="info">

            <div className="info flex justify-center gap-10 ">
                
                <div className="mt-10 lg:ml-10">
                    <img 
                    src="/Portfolio-tatuaje/imagenes/Imagen pagina web-02.jpg"
                    className="w-60 mb-10 md:w-80 border border-black "
                    />
                </div>

                <p className="hidden lg:block text-white size-100  mt-10 ">
                    “Anubis”,
                    01/09/2023,
                    puntillismo de arrastre, tatuaje a blanco y negro
                    ,edia pierna, 30x12 cm 
                    (9 horas)
                    <p>
                        Nos encontramos con los dos primeros tatuajes que realicé 
                        del proyecto que hemos comentado anteriormente. 
                        La media pierna egipcia comenzó con el tatuaje del dios Anubis 
                        en la tibia (Tatuaje de la izquierda). Un dios con mucha presencia en la mitología egipcia. 
                        Se le asociaba con la protección de las tumbas, la muerte y la vida que hay tras esta; 
                        señor de la necrópolis y patrón de los embalsamadores. 
                    </p>
                </p>
            </div>

            
                
            <div className="info flex justify-center gap-10 ">

                <p className="hidden lg:block text-white size-100 ">
                    “Ra”,
                    08/01/2024
                    Puntillismo de arrastre y sombreado con magnum, tatuaje a blanco y negro,
                    media pierna, 35x12 cm 
                    (8 horas 30 minutos)

                    <p>El siguiente tatuaje se trata de uno de los dioses egipcios más importantes, 
                    el dios del sol Ra (Tatuaje de la derecha). Encarnaba el poder del sol, 
                    pero también se creía que era el propio sol, imaginado como el gran dios que 
                    cabalgaba en su barcaza por los cielos a lo largo del día y descendía al inframundo al atardecer.</p>
                </p>
                

                <div className="mb-10 lg:mr-10">
                    <img 
                    src="/Portfolio-tatuaje/imagenes/Imagen pagina web-05.jpg"
                    className="w-60 md:w-80 border border-black "
                    /> 
                </div>
            </div>

            <div className="info flex justify-center gap-10">
                
                <div className="lg:ml-10">
                    <img 
                    src="/Portfolio-tatuaje/imagenes/Imagen pagina web-12.jpg"
                    className="w-60 mb-10 md:w-80 border border-black "
                    />
                </div>

                <p className="hidden lg:block text-white size-100  mt-10 ">
                    “Ali”,
                    06/08/2025,
                    sombreado con magnum y rs, tatuaje a realismo,
                    zona media del gemelo.
                    20 cm (10 horas)
                    <p>Se trata de un tatuaje realista de una perrita llamadaa Ali. Su dueña, tras el fallecimiento de su mascota
                        decidio contactarme para plasmar una foto de Ali en su piel.
                    </p>
                </p>
            </div>

            <div className="info flex justify-center gap-10 ">

                <p className="hidden lg:block text-white size-100 ">
                   “Horror vacui”,
                    11/05/2024,
                    puntillismo de arrastre y linea gruesa, tatuaje de blackwork,
                    manga completa y pecho.
                    1 metro (11 horas)
                    <p>El proyecto consta de diferentes ornamentaciones de estilo barroco que recorren todo su brazo, pecho y espalda; 
                        creando así huecos entre estas en donde el cliente quiere introducir diferentes tipos de tatuajes: realismo, lettering, etc.
                        Entre otros diseños que incorporaremos entre la ornamentación, destaca un laberinto con un estilo surrealista situado 
                        en el hombro y un texto escogido para la parte interior del biceps.</p>
                </p>

                <div className="mb-10 lg:mr-10">
                    <img 
                    src="/Portfolio-tatuaje/imagenes/Imagen pagina web-16.jpg"
                    className="w-60 md:w-80 border border-black "
                    /> 
                </div>
            </div>

            <div className="info flex justify-center gap-10">
                
                <div className=" lg:ml-10">
                    <img 
                    src="/Portfolio-tatuaje/imagenes/Imagen pagina web-23.jpg"
                    className="w-60 mb-10 md:w-80 border border-black"
                    />
                </div>

                <p className="hidden lg:block text-white size-100  mt-10 ">
                   “Cowboys”,
                    12/11/2025,
                    linea gruesa, sombreado a puntillismo y relleno con rl, tatuaje tipo sketch,
                    triceps.
                    12 cm (4 horas)
                    <p>Se trata del primer tatuaje de una composición de dos tatuajes, cadas uno situado en 
                    un triceps del cliente. La composición estaria compuesta por ese tatuaje, el tatuaje que viene a continuación
                    y una tercera pieza que estaria en la espalda y que se relacionaria con los cowboys.</p>
                </p>
            </div>

            <div className="info flex justify-center gap-10">

                <p className="hidden lg:block text-white size-100 ">
                  “Cowboys”,
                    12/11/2025,
                    linea gruesa y relleno con rl, tatuaje tipo sketch,
                    triceps.
                    12 cm (4 horas)
                    <p>Aqui encontramos la segunda pieza de los cowboys, como vemos este tatuaje es el que recibe el 
                        disparo, el cual, el anterior tatuje realiza. Tanto el humo de uno como el disparo del otro están realizados con sombra 
                        de puntillismo de arrastre. </p>
                </p>

                <div className="mb-10 lg:mr-10">
                    <img 
                    src="/Portfolio-tatuaje/imagenes/Imagen pagina web-24.jpg"
                    className="w-60 md:w-80 border border-black "
                    /> 
                </div>
            </div>

            <div className="info flex justify-center gap-10">
                
                <div className=" lg:ml-10">
                    <img 
                    src="/Portfolio-tatuaje/imagenes/Imagen pagina web-15.jpg"
                    className="w-60 mb-10 md:w-80 border border-black"
                    />
                </div>

                <p className="hidden lg:block text-white size-100  mt-10 ">
                    “Chloe”,
                    05/09/2025,
                    sombreado con magnum, rs y rl, tatuaje a realismo,
                    zona media del antebrazo interior,
                    12 cm (6 horas)
                    <p>Al igual que anteriormente, se trata del retraro de una mascota de una clienta.
                        En este caso la clienta me pido un retrato de su actual mascota, una perrita de agua
                        llamada Chloe.
                    </p>
                </p>
            </div>

            <div className="info flex justify-center gap-10 ">

                <p className="hidden lg:block text-white size-100 ">
                   “DiCaprio”,
                    24/07/2025,
                    sombreado con magnum y rs, tatuaje a realismo,
                    piel sintetica.
                    30 cm (25 horas)
                    “Chloe”,
                    05/09/2025,
                    sombreado con magnum y rs, tatuaje a realismo,
                    zona media del gemelo.
                    20 cm (10 horas)
                    <p>Aqui vemos un trabajo de práctica que realicé en la acaademia de GangaTattoo, un retrado de Leonardo Dicaprio
                        a realismo. Se trataba del último ejercicio que realizabamos en las dos semanas que duraba el curso.
                    </p>
                </p>

                <div className="mb-10 lg:mr-10">
                    <img 
                    src="/Portfolio-tatuaje/imagenes/Imagen pagina web-29.jpg"
                    className="w-60 md:w-80 border border-black "
                    /> 
                </div>
            </div>

            
        </div>


    </div>

            
  )
}
