import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routers/Home';
import Detail from './routers/Detail';
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
