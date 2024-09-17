import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/cardapio' element={<Cardapio />} />
      </Routes>
    </Router>
  );
}