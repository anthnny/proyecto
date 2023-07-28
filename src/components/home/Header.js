 import { Typewriter } from "react-simple-typewriter"
import herba from "assets/img/herba.png"

function Header(){
    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-30 lg:pt-40 lg:pb-48 pt-24 pb-12  ">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-16 sm:text-7xl">
                  Remedios <span> </span>
                    <div className="inline-flex" style={{ color: '#b5ca92', fontWeight: 'bold' }}>
                      <Typewriter
                            words={['Caseros', 'Herbales']}
                            loop={0}
                            cursor
                            
                            cursorStyle='_'
                            typeSpeed={120}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            // onLoopDone={handleDone}
                            // onType={handleType}
                        />
                    </div>
                </h1>
                <p className="mt-16 text-2xl max-w-2xl leading-8 text-black">
                La naturaleza nos brinda un tesoro de remedios, pero la seguridad y el bienestar son la prioridad número uno. 
                ¡Explora el mundo de las plantas medicinales con prudencia y disfruta de sus increíbles beneficios!
                </p>
                <div className="mt-8 flex gap-x-4">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-white-600 hover:bg-green-700 hover:ring-green-700"
                  >
                    Iniciar Sesión
                  </a>
                  <a
                    href="#"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Ver Remedios
                  </a>
                </div>
              </div>
              <div className="absolute top-[calc(100%-15rem)] -z-10 transform-gpu overflow-hidden bg-white lg:top-[calc(100%-43rem)] sm:top-[calc(100%-28rem)] right-20 w-1/3">
                <img src={herba} className='w-full h-auto object-cover'/>
              </div>


            </div>
          </div>
        </div>
      </main>
    )
}

export default Header