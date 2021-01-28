import { Grid } from '@material-ui/core'
import { useState } from 'react';
import { Loading } from './components/Loading';
import { Tabs } from './components/Tabs'
import './styles/app.css'

function App() {

  // state para manejar el cambio de componente cuando se cambia la pestaña, el state se lo pasemos como props
  // al component de tabs
  const [componente, setComponente] = useState(0);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('Presione el boton para autenticarse');

  return (
    
    <header className="fondo" >
      <div className="contenedor">
        <Grid container>
            <Grid item xs={ 12 } sm={ 6 } className="tabs" >
                <Tabs setComponente = { setComponente } setLoading = { setLoading } loading={ loading } setMensaje={ setMensaje } />
            </Grid>
            <Grid item xs={ 12 } sm = { 6 } >
                {
                  componente > 0 ? 
                  <Loading loading={ loading } 
                    mensajeCargando = "Cargando ... "
                    mensajeDefault = { mensaje } /> : 
                  <Loading loading={ loading } 
                    mensajeCargando = "Generando llaves publicas y privadas, en un momento iniciará la descarga"
                    mensajeDefault = "Presione en generar llaves para iniciar la descarga" />
                }
            </Grid>
        </Grid>
      </div>
    </header>

  );
}

export default App;
