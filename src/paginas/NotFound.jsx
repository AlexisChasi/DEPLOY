
import { Link } from 'react-router-dom'


export const NotFound = () => {
    return (


        <div className="flex flex-col items-center justify-center">
            <div className="bg-[#B2B9BF] shadow-lg rounded-lg p-8 w-112"> {/* Estilo del recuadro */}
                

                <div className="flex flex-col items-center justify-center">

                    <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">Pagina no encontrada</p>

                    <p className="md:text-lg lg:text-xl text-gray-600 mt-8">La pagina que buscas no ha sido encontrada</p>

                    <Link to="/login" className="p-3 m-5 w-full text-center  bg-[#FFFFFF] text-black-300  border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900 hover:text-white">Iniciar sesion</Link>

                </div>
            </div>
        </div>
    )
}
