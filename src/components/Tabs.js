import React, { Fragment, useState } from 'react'
import { AppBar, Box, Tab, Tabs as Tb } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Registro } from './Registro';
import { Autenticacion } from './Autenticacion';

// estilos para las pestañas
export const useAppBar = makeStyles((theme) => ({
    root: {

        padding: '1rem 0',
        
        [theme.breakpoints.down("xs")] : {
            padding: '0'
        },

        '&.MuiPaper-elevation4': {
            boxShadow: 'none'
        },
        '& .MuiTab-root': {
            fontSize: '1.2rem',
            textTransform: "capitalize",
            fontWeight:'500',
            [theme.breakpoints.down("xs")]: {
                fontSize: '0.8rem',
                fontWeight:'300'
            }
        }
    }
}))

export const Tabs = ({ setComponente, setLoading, loading, setMensaje }) => {

    // para el control del tabs
    const [value, setValue] = useState(0);

    // hook para los estilos
    const appBarClasses = useAppBar();

    // funcion para actualizar el state cuando se cambia de pestaña
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setComponente(newValue)
    };

    return (
        <Fragment>
        <AppBar position="static" color="transparent" className={appBarClasses.root}>
            <Tb variant="fullWidth" value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Generar llaves" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
                <Tab label="Autenticarse" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
            </Tb>
        </AppBar>
        <TabPanel value={value} index={0}>
            <Registro setLoading = { setLoading } loading={ loading } />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Autenticacion setLoading = { setLoading } loading={ loading } setMensaje={ setMensaje } />
        </TabPanel>
    </Fragment>
    )
}

// componente para visualizar los pestañas
const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    {children}
                </Box>
            )}
        </div>
    );
}