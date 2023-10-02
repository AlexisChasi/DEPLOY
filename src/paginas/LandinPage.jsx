import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel

import ford from "../assets/ford.png"
import Peugeot_Logo from "../assets/Peugeot_Logo.png"
import Audi_logo from "../assets/Audi_logo.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'


export const LandinPage = () => {
    const [darkMode, setdarkMode] = useState(false)
    const mainStyle = {
        backgroundImage: `url('/public/images/fondo1.jpg')`, // Reemplaza con la ruta de tu imagen de fondo
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
    };

    return (
        <div >
            <main style={mainStyle} className='bg-[#B2B9BF] px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
                <section>
                    <nav className='p-10 mb-12 flex justify-between'>
                        <ul className='flex items-center'>
                            

                        </ul>
                        <ul className='flex items-center'>

                            <li><Link to="/login" className='bg-[#CDDFEF] text-grey-400 px-6 py-2 rounded-full ml-8 hover:bg-gray-900 hover:text-white' href="#">Iniciar sesión</Link>
                            </li>
                        </ul>
                    </nav>



                    <div className='text-center'>
                        <h2 className='text-5xl py-2 text-[#000000] font-medium md:text-6xl'>Gestion de renta de carros</h2>

                        <h3 className='text-2xl py-2 md:text-3xl text-[#000000]'>EL MEJOR LUGAR DE RENTA DE CARROS </h3>
                    </div>

                    


                </section>

                <section>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold py-4 text-[#000000]'>MARCAS AUSPICIANTES</h1>
                    </div>

                    <Carousel
                        showArrows={false}
                        infiniteLoop={true}
                        showThumbs={false}
                    >
                        <div className='flex justify-center items-center'> {/* Agregamos flex y justify-center para centrar horizontalmente */}
                            <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 bg-[#B2B9BF]   '>
                                <div className='mx-auto w-72 h-40 overflow-hidden rounded-lg'>
                                    <img className='w-full h-full object-cover' src={ford} alt="" />
                                </div>
                                <h3 className='text-lg font-medium pt-8 pb-2'>FORD</h3>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'> {/* Agregamos flex y justify-center para centrar horizontalmente */}
                            <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 bg-[#B2B9BF]'>
                                <div className='mx-auto w-72 h-40 overflow-hidden rounded-lg'>
                                    <img className='w-full h-full object-cover' src={Peugeot_Logo} alt="" />
                                </div>
                                <h3 className='text-lg font-medium pt-8 pb-2'>PEUGEOT</h3>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'> {/* Agregamos flex y justify-center para centrar horizontalmente */}
                            <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 bg-[#B2B9BF]'>     
                                <div className='mx-auto w-72 h-40 overflow-hidden rounded-lg'>
                                    <img className='w-full h-full object-cover' src={Audi_logo} alt="" />
                                </div>
                                <h3 className='text-lg font-medium pt-8 pb-2'>AUDI</h3>
                            </div>
                        </div>
                    </Carousel>
                </section>


            </main>
            <footer className='bg-[#B2B9BF] text-grey py-8'>
                <div className='container mx-auto text-center'>
                    <div className='grid grid-cols-3 gap-8'>
                        <div>
                            <h3 className='text-lg font-semibold mb-4'>Contáctos</h3>
                            <ul className='text-sm'>
                                <li>+593 0000 565</li>
                                <li><a href='mailto:demomail@gmail.com'>ejemplo@gmail.com</a></li>
                                <li>Quito - Ecuador</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-4'>Servicios</h3>
                            <ul className='text-sm'>
                                <li>RENTA DE CARROS</li>
                                <li>VENTA DE CARROS</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-4'>TIPO DE AUTOS</h3>
                            <p>	Compacto, Económico, Mediano, Minivan, SUV compacto, SUV mediano, SUV tamaño estándar</p>
                        </div>
                    </div>
                    <p className='mt-8'>
                        ©{new Date().getFullYear()} Todos los derechos reservados 
                        
                    </p>
                </div>
            </footer>

        </div>
    )
}   