import { Route, Routes } from 'react-router-dom';
import Globals from 'styles/Globals';
import Home from '../routers/Home';
import Flea from 'routers/Flea';
import Detail from '../routers/Detail';

function App() {
	return (
		<>
			<Globals />
			<Routes>
				<Route path="/" element={<Home />} /> {/* 클래스 */}
				<Route path="/flea" element={<Flea />} /> {/* 플리마켓 */}
				<Route path="/detail/:id" element={<Detail />} />
			</Routes>
		</>
	);
}

export default App;
