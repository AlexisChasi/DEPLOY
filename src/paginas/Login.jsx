import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <>

            <div className="h-screen flex justify-center items-center">

            <div className="bg-[#B2B9BF] shadow-lg rounded-lg p-8 w-96"> {/* Estilo del recuadro */}

                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase  text-black-500">Bienvenido!</h1>
                    <small className="text-black-400 block my-4 text-sm">Ingresa tus credenciales</small>

                    <form >
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">e-mail</label>
                            <input type="email" placeholder="ingresa tu e-mail" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-2 text-gray-500" />
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Contraseña</label>
                            <input type="email" placeholder="********************" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-2 text-gray-500" />
                        </div>

                        <div className="my-4">
                            <Link to="/dashboard" className="py-2 w-full block text-center bg-[#FFFFFF] text-black-300 border rounded-xl hover:scale-100 duration-300 hover:bg-gray-900 hover:text-white">Login</Link>
                        </div>

                    </form>

                    <div className="mt-5 text-xs border-b-2 py-4 ">
                        <Link to="/forgot/id" className="underline text-sm text-black-400 hover:text-gray-900">Olvidaste tu contraseña?</Link>
                    </div>

                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p>No tienes una cuenta?</p>
                        <Link to="/register" className="py-2 px-5 bg-[#FFFFFF] text-black-300 border rounded-xl hover:scale-110 duration-300 hover:bg-black-900 hover:text-black">Registrate</Link>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Login