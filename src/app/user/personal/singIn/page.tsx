'use client'
import SingIn from "@/components/client/singIn"
import ClientToken from "@/components/client/jwToken"
import React, { useState } from 'react';




export default function Example() {
  const [dataToken, setDataToken] = useState<any>(null);

  const form = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      const formData = new FormData(event.currentTarget);
      const token = await SingIn(formData);
      
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
              Iniciar sesion en su cuenta
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={form} method="post">
              <div>
                <label htmlFor="e_mail" className="block text-sm font-medium leading-6 text-gray-900">
                  Correo electronico
                </label>
                <div className="mt-2">
                  <input
                    id="e_mail"
                    name="e_mail"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Contraseña
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Has olvidado tu contraseña?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
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
              No tiene cuenta?{' '}
              <a href="http://192.168.100.19:3000/user/personal/singUp" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Crear cuenta
              </a>
            </p>
          </div>
        </div>
        {dataToken && <ClientToken dataToken={dataToken} />}
      </>
    )
  }
  