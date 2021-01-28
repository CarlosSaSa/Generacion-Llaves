/**
 * Archivo que incluyen las funciones para realizar las peticiones
 */
import { URL } from "../config/config";

export const generarLlaves =  async ( frase ) => {

    // definimos la URL para la peticion
    const urlPeticion = `${URL}/api/generarLlaves`;

    // creamos las opciones
    const opciones = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(frase)
    }

    // realizamos la peticion con fetch
    try {
        const respuesta = await fetch( urlPeticion, opciones );
        const datos = await respuesta.blob()
        return datos;
    } catch (error) {
        return error;
    }

}

// funcion que realiza la autenticacion del usuario
export const autenticacion = async ( body ) => {

    const urlPeticion = `${URL}/api/autenticar`;
    // establecemos las opciones
    const opciones = {
        method: 'POST',
        body : body
    }

    // realizamos la peticion
    try {
        const respuesta = await fetch( urlPeticion, opciones );
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        return error;
    }

}