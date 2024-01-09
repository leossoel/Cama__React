import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { create } from 'domain';
import { redirect } from 'next/navigation';

export default function Example() {


   async function createCama(formData: FormData) {
      'use server'
      // let alto = formData.append('height', formData.get('height')!);

      // console.log(alto)

      let json = JSON.stringify({
         name: formData.get('name'),
         model: formData.get('model'),
         width: formData.get('width'),
         height: formData.get('height'),
         depth: formData.get('depth'),
         unit: formData.get('unit'),
         price: formData.get('price'),
         color: formData.get('color'),

      });

      let body = new FormData  
      body.append('json', json);
      body.append('image', formData.get('image')!);

      console.log(body)

      const response = await fetch('http://localhost:3001/cama', {
         body,
         method: 'POST',
         cache: 'no-store',
      })

      console.log("sadasd")

      if(!response.ok){
         return "sexxxxxxxoooooo"
      }

      const id = await response.json();
      console.log(id)
      redirect("http://localhost:3000/camas")
   }

   return ( 
      <form action={createCama}  method='post'   className='bg-white my-[40px] mx-96 p-[40px]' >
         <div className="space-y-12">



            <div className="border-b border-gray-900/10 pb-12">
               <h2 className="text-base font-semibold leading-7 text-gray-900">Crear nueva cama</h2>
               <p className="mt-1 text-sm leading-6 text-gray-600">Ingresa los datos en los campos.</p>

               <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                     <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Nombre de la cama:
                     </label>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="name"
                           id="name"
                           autoComplete="off"
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-3">
                     <label htmlFor="model" className="block text-sm font-medium leading-6 text-gray-900">
                        Modelo:
                     </label>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="model"
                           id="model"
                           autoComplete="off"
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>


                  <div className="sm:col-span-2 sm:col-start-1">
                     <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">
                        Alto:
                     </label>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="height"
                           id="height"
                           autoComplete="off"
                           className="w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-2">
                     <label htmlFor="width" className="block text-sm font-medium leading-6 text-gray-900">
                        Ancho:
                     </label>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="width"
                           id="width"
                           autoComplete="off"
                           className="w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-2">
                     <label htmlFor="depth" className="block text-sm font-medium leading-6 text-gray-900">
                        Profundidad:
                     </label>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="depth"
                           id="depth"
                           autoComplete="off"
                           className="w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        <select
                           id="unit"
                           name="unit"
                           autoComplete="off"
                           className="w-[21%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                           <option>cm</option>
                           <option>ft</option>
                           <option>in</option>
                        </select>
                     </div>

                  </div>

                  <div className="sm:col-span-3">
                     <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Precio:
                     </label>
                     <div className="mt-2">
                        <input
                           id="price"
                           name="price"
                           type="text"
                           autoComplete="off"
                           className="w-[82%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <select
                           id="divisa"
                           name="divisa"
                           autoComplete="off"
                           className="w-[18%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                           <option>MXN</option>
                           <option>USD</option>
                           <option>JPY</option>
                        </select>
                     </div>
                  </div>

                  <div className="sm:col-span-3">
                     <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">
                        Color:
                     </label>
                     <div className="mt-2">
                        <input
                           id="color"
                           name="color"
                           type="text"
                           autoComplete="off"
                           className="w-[100%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>

            <div className="col-span-full">
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="image"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Subir archivo</span>
                      <input id="image" name="image" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">o arrastra y soltar</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>





         <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
               Cancel
            </button>
            <button
               type="submit"
               className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
               Save
            </button>
         </div>
      </form>
   )
}
