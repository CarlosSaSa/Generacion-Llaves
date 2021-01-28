import React, { useState } from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'
import { generarLlaves } from '../api/user';

// estilos para el boton
const useStyles = makeStyles( {
    boton: {
        margin: '20px auto',
    }

})


export const Registro = ({ setLoading, loading }) => {
    
    const boton = useStyles();

    // state para guardar el valor de la frase
    const [input, setInput] = useState({ frase: '' })
    const [error, setError] = useState(false);

    // hacemos desestructuracion del objeto

    const { frase } = input;

    const onSubmit = async (e) => {
        // para evitar que la pagina se recarge
        e.preventDefault();

        // si la frase esta vacia
        if ( frase === '' ) {
            setError(true);
            return;
        }
        setError(false);
        // realizamos la peticion hacia el servidor y regresamos el blob
        setLoading( true )
        const data = await generarLlaves( input );
        const url = window.URL.createObjectURL( new Blob( [ data ] ) );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download','llaves.zip');

        document.body.appendChild( link );
        link.click();
        link.parentNode.removeChild(link);
        setLoading(false);
    }

    const onChange = (e) => {
        setInput( { ...input, [e.target.name]: e.target.value } )
    }


    return (
        <form noValidate autoComplete="off" onSubmit= { onSubmit }>

            <TextField 
                label = "Inserte su frase"
                placeholder="Ej. Hola mundo"
                fullWidth
                name = "frase"
                value= { frase }
                error = { error }
                helperText={ error && "Inserte un campo no vacio"}
                onChange = { onChange }
            />

            <Button
                className={ boton.boton }
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled = { loading }
            >
                Generar llaves
            </Button>

        </form>
    )
}
