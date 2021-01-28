import React from 'react';
import '../styles/loading.css';

export const Loading = ({ loading, mensajeCargando, mensajeDefault }) => {
    return (
        <div className="loading-registro">
            <div className="texto">
                {
                    loading ? 
                        <h3> { mensajeCargando } </h3> :
                        <h3> { mensajeDefault } </h3> 
                }
            </div>
        </div>
    )
}
