
'use client'
import { useEffect } from 'react';

function MyComponent() {


  return (
    <div>
        holisasda
    </div>
  );
}

export default MyComponent;



// function ClientToken() {
//     const token = `
//     <script>
//     let user = {
//                 email: "${"hd"}",
//                 contraseña: "${"aad"}"
//             };
//             console.log("Hola desde el servidor");
//             localStorage.setItem('usuariosRegistrados', JSON.stringify(user));
//         </script>
//     `;

//     return (
//         <div dangerouslySetInnerHTML={{ __html: token }} />
//     );
//     }





// let dataToken: any; 
// async function createPersonal(formData: FormData) {
//     'use server'
//     let body = JSON.stringify({
//         id_role: formData.get('id_role'),
//         first_name: formData.get('first_name'),
//         last_name: formData.get('last_name'),
//         birthday: formData.get('birthday'),
//         e_mail: formData.get('e_mail'),
//         pass: formData.get('password'),
//     });
    
//     const response = await fetch('http://localhost:3001/signUp', {
//         body,
//         method: 'post',
//         headers: {
//             "content-type": "application/json",
//         },
//         cache: 'no-store',
//     });
    
//     if (!response.ok) {
//         return;
//     }
    
//     dataToken = await response.json();
//     console.log("datatoken prueba: ", dataToken != null || undefined ? dataToken: " no contiene ningun valor aaaaaaa" )
    
//     return <ClientToken dataToken={dataToken} />;

// } 