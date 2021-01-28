import { Button, makeStyles } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import React, { useState } from 'react'
import { autenticacion } from '../api/user';


const useStyles = makeStyles({
    input: {
        display: 'none',
    },
    margen: {
        marginBottom: '30px'
    }
})

// estilos para el boton
const botonStyle = makeStyles( {
    boton: {
        margin: '30px auto',
    }

})

export const Autenticacion = ({ setLoading, setMensaje }) => {

    const classes = useStyles();
    const boton = botonStyle();

    const [file, setFile] = useState(undefined);

    const onChange = (e) => {
        setFile( e.target.files[0] );
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = new FormData();
        data.append('file', file);
        const respuesta = await autenticacion( data );
        setMensaje( respuesta.mensaje );
        setLoading(false);

    }


    return (
        <form onSubmit={ onSubmit }>
            <input
                accept=".pem"
                id="contained-button-file"
                type="file"
                className={classes.input}
                onChange = { onChange }
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Seleccionar llave pública
                </Button>
            </label>

            <Button
                className={ boton.boton }
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                disabled = { file !== undefined ? false: true  }
            >
                Autenticarse
            </Button>

            {
            file !== undefined ? 
                <Alert severity="success" wrap="nowrap">  Se ha cargado un archivo archivo </Alert>:
                <Alert severity="error">No se ha cargado el archivo </Alert>
            
            }
        </form>
    )
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
