import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import Mensaje from '../componets/Alertas/Mensaje'

export const Register = () => {
    const [mensaje, setMensaje] = useState({})

    const [form, setform] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e) => { 
        e.preventDefault()
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/confirmar/${token}` 
            const respuesta = await axios.post(url,form)
            setMensaje({respuesta:respuesta.data.msg,tipo:true})
            setform({})
        } catch (error) {
            setMensaje({respuesta:error.response.data.msg,tipo:false})
        }
}

    return (
        <>
            <div className="h-screen flex justify-center items-center">
            {Object.keys(mensaje).length > 0 && <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>}
                <div className="bg-[#B2B9BF] shadow-lg rounded-lg p-8 w-96"> {/* Estilo del recuadro */}
                    
                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase  text-black-500">BIENVENIDO</h1>
                    <small className="text-black-400 block my-4 text-sm">Ingresa la siguiente informacion</small>


                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Nombre</label>
                            <input type="text" id="nombre" name='nombre'
                                value={form.nombre || ""} onChange={handleChange}
                                placeholder="Ingresa tu nombre" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500" required />
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Apellido</label>
                            <input type="text" id="apellido" name='apellido'
                                value={form.apellido || ""} onChange={handleChange}
                                placeholder="Ingresa tu apellido" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500" required />
                        </div>



                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">e-mail</label>
                            <input type="text" id="email" name='email'
                                value={form.email || ""} onChange={handleChange}
                                placeholder="Ingresa tu e-mail" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500" required />
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Contraseña</label>
                            <input type="text" id="password" name='password'
                                value={form.password || ""} onChange={handleChange}
                                placeholder="Ingresa tu contraseña" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500" required />
                        </div>

                        <div className="mb-3">
                            <button className="bg-[#FFFFFF]  text-black-300 border py-2 w-full rounded-xl mt-5 hover:scale-105 duration-300 hover:bg-gray-900 hover:text-white">Registrar
                            </button>
                        </div>

                    </form>


                    <div className="mt-5 text-xs border-b-2 py-4 ">
                    </div>

                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p>Ya tienes una cuenta?</p>
                        <Link to="/login" className="py-2 px-5 bg-[#FFFFFF] text-black-300 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900 ">Iniciar sesion</Link>
                    </div>


                </div>

            </div>


        </>
    )
}
