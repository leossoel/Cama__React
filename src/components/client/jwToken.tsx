'use client'
import React, { useEffect } from 'react';

interface ClientTokenProps {
    dataToken: any;
}

const ClientToken: React.FC<ClientTokenProps> = ({ dataToken }) => {
    useEffect(() => {
        // Usa dataToken según sea necesario
        console.log('Token recibido:', dataToken);

        // Ejemplo de uso: guardar en el localStorage
        localStorage.setItem('dataToken', JSON.stringify(dataToken));
    }, [dataToken]);

    return null; // No renderiza ningún elemento HTML
};

export default ClientToken;