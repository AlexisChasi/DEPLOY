import {Link} from 'react-router-dom'


export const Forgot = () => {
    return (
        <>
            <div className="h-screen flex justify-center items-center">

            <div className="bg-[#B2B9BF] shadow-lg rounded-lg p-8 w-96"> {/* Estilo del recuadro */}

                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase  text-gray-500">Olvidaste tu contraseña!</h1>
                    <small className="text-black-400 block my-4 text-sm">Ingresa la siguiente informacion</small>


                    <form >

                        <div className="mb-1">
                            <label className="mb-2 block text-sm font-semibold">e-mail</label>
                            <input type="email" placeholder="ingresa tu e-mail" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                        </div>

                        <div className="mb-3">
                            <button className="bg-[#FFFFFF] text-black-300 border py-2 w-full rounded-xl mt-5 hover:scale-105 duration-300 hover:bg-gray-900 hover:text-white">Enviar e-mail
                            </button>
                        </div>

                    </form>

                    <div className="mt-5 text-xs border-b-2 py-4 ">
                    </div>

                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p>Ya la recordaste?</p>
                        <Link to="/login" className="py-2 px-5 bg-[#FFFFFF] text-black-300 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900 hover:text-white">Iniciar sesion</Link>

                    </div>

                </div>

            </div>

            
        </>
    )
}
