'use client';
import ClientToken from '@/components/client/jwToken';
import CreatePersonal from '@/components/client/SingUp';;
import React, { useState } from 'react';



export default function Register() {

    const [dataToken, setDataToken] = useState<any>(null);

    const form = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        const token = await CreatePersonal(formData);
        
        if (token) {
            setDataToken(token);
        }
        window.location.href = "http://192.168.100.19:3000/user/personal/home"
    };

    
    
    return (
        <>
            <div className="bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                        />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Crear cuenta
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={form} method='post' className="space-y-6">
                        <div>
                            <label htmlFor="id_role" className="block text-sm font-medium leading-6 text-gray-900">
                                Area/rol:
                            </label>
                            <div className="mt-0">
                                <select
                                    id="id_role"
                                    name="id_role"
                                    autoComplete="off"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                    <option value={2}>Administrador</option>
                                    <option value={3}>Gerencia</option>
                                    <option value={4}>Supervisor</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nombre/s:
                            </label>
                            <div className="mt-0">
                                <input
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    autoComplete="off"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Apellido/s:
                                </label>
                            </div>
                            <div className="mt-0">
                                <input
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    autoComplete="off"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="birthday" className="block text-sm font-medium leading-6 text-gray-900">
                                    Fecha de nacimiento:
                                </label>
                            </div>
                            <div className="mt-0">
                                <input
                                    id="birthday"
                                    name="birthday"
                                    type="date"
                                    autoComplete="off"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="e_mail" className="block text-sm font-medium leading-6 text-gray-900">
                                    Correo electronico:
                                </label>
                            </div>
                            <div className="mt-0">
                                <input
                                    id="e_mail"
                                    name="e_mail"
                                    type="text"
                                    autoComplete="off"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contraseña:
                                </label>
                            </div>
                            <div className="mt-0">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="off"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Iniciar sesion
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        ¿Ya tiene cuenta?{' '}
                        <a href="http://192.168.100.19:3000/user/personal/singIn" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Iniciar sesion
                        </a>
                    </p>
                </div>
            </div>
            {dataToken && <ClientToken dataToken={dataToken} />}
        </>
    )
}

