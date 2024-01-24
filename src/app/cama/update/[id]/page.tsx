export default async function Example({ params }: { params: { id: string } }) {

    const response = await fetch(`http://localhost:3001/cama/${params.id}`, {
      method: 'get',
      cache: 'no-store',
    });
  
  
    if (!response.ok) {
      return "sexxxxxxxoooooo"
    };
  
  
    const camaInf = await response.json();
  

    return (
        <div></div>

    )






}