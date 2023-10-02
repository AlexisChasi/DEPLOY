import { Link, Outlet, useLocation } from 'react-router-dom'


const Dashboard = () => {
    const location = useLocation()
    const urlActual = location.pathname
    return (
        <div className='md:flex md:min-h-screen'>

            <div className='md:w-1/5 bg-gray-800 px-5 py-4'>

                <h2 className='text-4xl font-black text-center text-slate-200'>CACHAU RENTA DE CARROS</h2>

                
                <p className='text-slate-400 text-center my-4 text-sm'> <span className='bg-green-600 w-3 h-3 inline-block rounded-full'></span> Bienvenido - Usuario</p>
                <hr className="mt-5 border-slate-500" />

                

            </div>

            <div className='flex-1 flex flex-col justify-between h-screen bg-gray-100'>
                <div className='bg-gray-800 py-2 flex md:justify-end items-center gap-5 justify-center'>
                <ul className="flex justify-center space-x-64"> {/* "justify-center" para centrar los elementos y "space-x-4" para la separación */}
                        <li className="text-center">
                            <Link to='/dashboard' className={`${urlActual === '/dashboard' ? 'text-slate-200 bg-[#9A3B3B] px-3 py-2 rounded-md text-center' : 'text-slate-600'} text-xl block mt-2 hover:text-slate-600`}>Perfil</Link>
                        </li>

                        <li className="text-center">
                            <Link to='/dashboard/listar' className={`${urlActual === '/dashboard/listar' ? 'text-slate-200 bg-[#9A3B3B] px-3 py-2 rounded-md text-center' : 'text-slate-600'} text-xl block mt-2 hover:text-slate-600`}>Listar</Link>
                        </li>

                        <li className="text-center">
                            <Link to='/dashboard/crear' className={`${urlActual === '/dashboard/crear' ? 'text-slate-100 bg-[#9A3B3B] px-3 py-2 rounded-md text-center' : 'text-slate-600'} text-xl block mt-2 hover:text-slate-600`}>Crear</Link>
                        </li>
                    </ul>
                    <div className='text-md font-semibold text-slate-100'>
                        Usuario - Admin
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/4715/4715329.png" alt="img-client" className="border-2 border-green-600 rounded-full" width={50} height={50} />
                    </div>
                    <div>
                        <Link to='/' className=" text-white mr-3 text-md block hover:bg-red-900 text-center
                        bg-red-800 px-4 py-1 rounded-lg">Salir</Link>
                    </div>
                </div>
                <div className='overflow-y-scroll p-8'>
                    <Outlet />
                </div>
                <div className='bg-gray-800 h-12'>
                    <p className='text-center  text-slate-100 leading-[2.9rem] underline'>Todos los derechos reservados</p>
                </div>

            </div>



        </div>
    )
}

export default Dashboard