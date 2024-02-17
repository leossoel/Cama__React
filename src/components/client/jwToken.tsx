'use client'
import React, { useEffect } from 'react';

interface ClientTokenProps {
    dataToken: any;
}

const ClientToken: React.FC<ClientTokenProps> = ({ dataToken }) => {
    useEffect(() => {
        console.log('Token recibido:', dataToken);

      
        localStorage.setItem('dataToken', JSON.stringify(dataToken));
    }, [dataToken]);

    return null; 
};

export default ClientToken;