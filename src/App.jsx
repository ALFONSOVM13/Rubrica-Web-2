// App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Overview from './pages/Overview';
import Content from './pages/Content';
import { Datos } from './contexto/Contexto';
import Create from './pages/Create';
import Footer from './components/Footer'; // Importa el componente Footer
import 'font-awesome/css/font-awesome.min.css';


function App() {
  const [overview, setOverview] = useState(true);
  const [content, setContent] = useState(false);
  const [create, setCreate] = useState(false);
  const [categoriaSeleccionada] = useState('');

  return (
    <Datos>
      <div>
        <Navbar setOverview={setOverview} setContent={setContent} setCreate={setCreate} />
        {content ? (
          <Content />
        ) : create ? (
          <Create
            categoriaSeleccionada={categoriaSeleccionada}
            setOverview={setOverview}
            setContent={setContent}
            setCreate={setCreate}
          />
        ) : (
          <Overview categoriaSeleccionada={categoriaSeleccionada} />
        )}

        <Footer />
      </div>
    </Datos>
  );
}

export default App;
