import { Link } from 'react-router-dom';


const Aside = () => (
<aside className="bg-teal-600 text-gray-700 p-4 h-screen w-50">
  <Link to="/" className="block p-2 rounded-md text-white hover:bg-blue-700">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={30}><path fill="#fff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
  </Link>
  
  <Link to="/Equipos" className="block p-2 rounded-md text-white hover:bg-gray-700">
    Equipos
  </Link>
</aside>
);

const Boton = ({ img, title, description }) => (
<div className="flex items-center p-4 rounded-md bg-gray-200 hover:bg-gray-300 place-items-center">
  <img src={img} alt={title} className="w-40 h-40 mr-4 rounded-full" />
  <div>
    <h2 className="text-gray-700">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
</div>
);

const Main = () => (
<main className="p-4">
<Boton
    img="https://futurmedical.com/wp-content/uploads/2021/05/monitor-signos-vitales-futurmedical-alquiler-venta-equipos-medicos.jpg"
    title="MONITORES"
    description=" Dispositivo que permite detectar, procesar y desplegar en forma continua los parámetros fisiológicos del paciente. Consta además de un sistema de alarmas que alertan cuando existe alguna situación adversa o fuera de los límites deseados."
  />
  <Boton
    img="https://technoin.com.co/wp-content/uploads/2018/12/desfibrilador-con-marcapasos-mindray-beneheart-d3.jpg"
    title="DESFIBRILADORES"
    description="son dispositivos que envían una corriente o descarga eléctrica al corazón para restaurar el latido normal."
  />
  <Boton
    img="https://medicolsa.com.co/1272/electrocardiografo-de-6-canales-edan-ekg-se-601c.jpg"
    title="ELECTROCARDIOGRAFO"
    description="registra la señal eléctrica del corazón para detectar diferentes afecciones cardíacas. Se colocan electrodos en el pecho para registrar las señales eléctricas del corazón que provocan los latidos."
  />
  <Boton
    img="data:image/jpeg;base64,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"
    title="VENTILADOR MECÁNICO"
    description=" son aparatos que funcionan como fuelles para permitir que el aire entre y salga de los pulmones."
  />
  <Boton
    img="https://instrumentalia.com.co/40440-large_default/compresor-vascular-scd700-covidien-ref-bajo-pedido-marca-kendall-clasificaci%C3%B3n-de-riesgo-iia.jpg"
    title="COMPRESOR VASCULAR"
    description="Proporciona compresión en la pierna o el pie, o en ambos simultáneamente."
  />
</main>
);

const App = () => (
<div className="flex">
  <Aside />
  <Main />
</div>

);

export default App;