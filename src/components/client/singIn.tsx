'use client'
async function SingIn(formData: FormData) {
    let body = JSON.stringify({
        e_mail: formData.get('e_mail'),
        pass: formData.get('password'),
    });
    
    const response = await fetch('http://localhost:3001/signIn', {
        body,
        method: 'post',
        headers: {
            "content-type": "application/json",
        },
        cache: 'no-store',
    });
    
    if (!response.ok) {
        return;
    }
    
    return response.json();
}

export default SingIn

// holis