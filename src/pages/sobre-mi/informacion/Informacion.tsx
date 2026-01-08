import "./estilus.css"

export const Informacion = () => {
  return (

      <div>
        
        <div className="flex gap-6 justify-center">

                <div className="text-white w-100 h-screen md:size-150">

                    <div className="formacion-1 mt-10 ">
                      <h2 >Sobre mi</h2>
                      <div className="texto ">
                        <p>
                          Buenas soy Marcos, artista del tatuaje y artista multidisciplinar.
                          Hace más de 4 años comencé mi camino por el mundo del tatuaje, por el cual he ido formándome con diversos tatuadores y academias. Actualmente estoy combinando mis estudios de bellas artes con mi trabajo de tatuador. 
                          Durante estos años como artista del tatuaje, he podido experimentar  con diferentes estilos, técnicas y materiales, con los que he realizado numerosas piezas personalizadas y únicas.
                          En estos momentos me especializo en el realismo, blackwork & dotwork, aunque procuro saber tatuar cualquier estilo que el cliente prefiera. 
                          En cada trabajo siempre busco la mayor creatividad y efectividad a la hora de crear una pieza, con la que el cliente quede satisfecho/a. Entablando así una confianza necesaria, para que pueda estar tranquilo y relajado durante todo el proceso. 
                          Para mi, es esencial devolver la confianza que el cliente me deposita a la hora de hacer un tatuaje, por eso trabajo el diseño y el tatuaje hasta que el cliente vea un resultado excepcional. 
                          Estoy encantado con la idea de poder trabajar del arte que adoro y en un establecimiento como es Blackdrip.studio. Por eso no dudes en visitarnos y preguntar por tu nueva obra de arte corporal.
                          </p>
                      </div>
                    </div>      
                </div>
                
                
                <div className="hidden md:block mt-10">
                    <img 
                    src="/public/imagenes/Imagen pagina web-22.jpg"
                    className="w-80 rounded-3xl"
                    /> 
                </div>
            </div>

    </div>

  )
}
