'use client'
async function CreatePersonal(formData: FormData) {
    let body = JSON.stringify({
        id_role: formData.get('id_role'),
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        birthday: formData.get('birthday'),
        e_mail: formData.get('e_mail'),
        pass: formData.get('password'),
    });
    
    const response = await fetch('http://localhost:3001/signUp', {
        body,
        method: 'post',
        headers: {
            "content-type": "application/json",
        },
        cache: 'no-store',
    });
    
    if (!response.ok) {
        return null;
    }
    
    return response.json();
}
export default CreatePersonal;
// buenas tardes