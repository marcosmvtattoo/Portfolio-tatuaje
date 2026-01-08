import "./estilus.css";

export const Experiencia = () => {
  
  return (

    <div>
        
        <div className="flex gap-6 justify-center">

                <div className="text-white w-100 h-screen md:size-150 ">

                    <div className="formacion-1 mt-5">
                      <h2 >Formación Académica</h2>
                      <div className="texto">
                        <p>2022-actualidad: cursando el Grado de Bellas Artes, Facultad de San Carlos de Valencia, UPV.</p>
                        <p>2022: estudios de bachillerato artístico, escuela de artes de Toledo, EA Toledo.</p>
                      </div>
                      
                    </div>
                
                  <div className="formacion-2 mt-5 flex flex-col gap-11">
                      <h2 >Formación Complementaria </h2>
                      <div className="texto ">
                        <p>2025:Seminario de realismo, GangaTattooAcademy.</p>
                        <p>2025:Seminario de Lettering para tatuajes, Domestika.</p>
                        <p>2025:Seminario sobre Diseño de tatuaje Neotradicional,Domestika</p>
                        <p>2024:Seminario de Blackwork con línea fina, Domestika.</p>
                        <p>2024:Seminario de sombreado con pepper shading, Domestika.</p>
                        <p>2024:Seminario sobre Tatuaje artístico full color,Domestika.</p>
                        <p>2021:Curso de iniciación al tatuaje, Escuela Oficial de Maestros Tatuadores.</p>
                      </div>
                      
                  </div>

                  <div className="formacion-3 mt-5">
                      <h2 >Experiencia Laboral</h2>
                      <div className="texto">
                        <p>2021-actualidad: Trabajador autónomo como tatuador.</p>
                        <p>2023:Federación de Deportes Aéreos de Castilla la Mancha</p>
                      </div>
                  </div>
                </div>

                <div className="hidden md:block mt-10">
                    <img 
                    src="/Portfolio-tatuaje/imagenes/Imagen pagina web-21.jpg"
                    className="w-80 rounded-3xl"
                    /> 
                </div>
         </div>

    </div>
  )
}
