



// const camas = [
//     {
//         "id": 1,
//         "name": "Seda++",
//         "model": "tak1",
//         "width": 10000,
//         "heigth": 80,
//         "depth": 200,
//         "price": 10000,
//         "color": "red",
//         "active": true
//     },
//     {
//         "id": 2,
//         "name": "Cama Plus",
//         "model": "tak2",
//         "width": 32000,
//         "heigth": 80,
//         "depth": 200,
//         "price": 9000,
//         "color": "black",
//         "active": true
//     },
//     {
//         "id": 3,
//         "name": "Seda onix",
//         "model": "tak3",
//         "width": 112000,
//         "heigth": 80,
//         "depth": 200,
//         "price": 8000,
//         "color": "blue",
//         "active": true
//     }
// ]

interface Cama {
    "id": number,
    "name": string,
    "model": string,
    "width": number,
    "heigth": number,
    "depth": number,
    "price": number,
    "color": string,
    "ext": string,
    "active": boolean,
}

// Create our number formatter.


export default async function Camas() {
    const response = await fetch('http://localhost:3001/camas', { cache: 'no-store' })

    if (!response.ok) {
        return <p>Error</p>
    }

    const camas: Array<Cama> = await response.json();

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {/* Cama */}
                    {camas.map(cama => (
                        <div key={cama.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={`http://192.168.100.19:3001/camas/${cama.id}.png`}
                                    alt="IMAGEN CAMA"
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={`localhost:3000/cama/${cama.id}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {cama.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{cama.model}</p>
                                    <p className="mt-1 text-sm text-gray-500">Dimensiones: {cama.width}cm x {cama.heigth}cm x {cama.depth}cm</p>

                                    <p className="mt-1 text-sm text-gray-500">{cama.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{cama.price} USD</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}