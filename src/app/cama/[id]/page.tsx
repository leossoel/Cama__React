
import React from 'react';
import { redirect } from 'next/navigation';










export default async function Example({ params }: { params: { id: string } }) {

  const response = await fetch(`http://localhost:3001/cama/${params.id}`, {
    method: 'get',
    cache: 'no-store',
  });


  if (!response.ok) {
    return "sexxxxxxxoooooo"
  };


  const camaInf = await response.json();

  console.log(camaInf);
  console.log(params.id);






  const features = [
    { name: 'Nombre', description: camaInf.name },
    { name: 'Modelo', description: camaInf.model },
    { name: 'Ancho', description: `${camaInf.width} ${camaInf.unit}` },
    { name: 'Alto', description: `${camaInf.height} ${camaInf.unit}` },
    { name: 'Profundidad', description: `${camaInf.depth} ${camaInf.unit}` },
    { name: 'Precio', description: `${camaInf.price} ${camaInf.currency}` },
    { name: 'Material', description: `${camaInf.material}` },
    { name: 'Color', description: `${camaInf.color}` },
  ]
  return (
    <div className="bg-white ">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{camaInf.name}</h2>
          <p className="mt-4 text-gray-500">
            "Experimenta el lujo y la comodidad con nuestras camas premium.
            Descansa en estilo y despiértate renovado. ¡Transforma tu sueño hoy con SEDA, la elección perfecta para un descanso excepcional!"
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-7 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>

        </div>

        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={`http://192.168.100.19:3001/camas/${camaInf.id}.png`}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <div className="mt-0 flex items-center justify-end gap-x-1 mt-x-100">
            <a href={`http://192.168.100.19:3000/cama/update/${camaInf.id}`}>
              <button type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Actualizar
              </button>
            </a>
            <a href={`http://192.168.100.19:3000/cama//${camaInf.id}`}>
              <button
                type="button"
                id='delete'
                className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Eliminar
              </button>
            </a>
          </div>
        </div>


      </div>
    </div>
  )
}