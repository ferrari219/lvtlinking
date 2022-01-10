import { Route, Routes } from 'react-router-dom';
import Home from './routers/Home';
import Detail from './routers/Detail';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/:id" element={<Detail />} />
		</Routes>
	);
}

export default App;
