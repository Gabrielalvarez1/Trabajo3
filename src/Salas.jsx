import { Link } from 'react-router-dom';


const Aside = () => (
<aside className="bg-teal-600 text-gray-700 p-4 h-screen w-50">
  <Link to="/" className="block p-2 rounded-md text-white hover:bg-blue-700">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={30}><path fill="#fff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
  </Link>
  <Link to="/salas" className="block p-2 rounded-md text-white hover:bg-gray-700">
    Salas / ubicaciones
  </Link>
  <Link to="/personal" className="block p-2 rounded-md text-white hover:bg-gray-700">
    Personal
  </Link>
  <Link to="/pacientes" className="block p-2 rounded-md text-white hover:bg-gray-700">
    Pacientes
  </Link>
  <Link to="/gestion-equipos" className="block p-2 rounded-md text-white hover:bg-gray-700">
    Gestión Equipos
  </Link>
</aside>
);

const Boton = ({ img, title, description }) => (
<div className="flex items-center p-4 rounded-md bg-gray-200 hover:bg-gray-300 place-items-center">
  <img src={img} alt={title} className="w-16 h-16 mr-4 rounded-full" />
  <div>
    <h2 className="text-lg font-bold">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
</div>
);

const Main = () => (
<main className="p-4">
  <Boton
    img="https://source.unsplash.com/random"
    title="Salas / ubicaciones"
    description="Gestiona las salas y ubicaciones del hospital."
  />
  <Boton
    img="https://source.unsplash.com/random"
    title="Personal"
    description="Gestiona el personal del hospital."
  />
  <Boton
    img="https://source.unsplash.com/random"
    title="Pacientes"
    description="Gestiona los pacientes del hospital."
  />
  <Boton
    img="https://source.unsplash.com/random"
    title="Gestión Equipos"
    description="Gestiona los equipos del hospital."
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

