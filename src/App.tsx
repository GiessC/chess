import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ChessGame from './components/ChessGame';
import './styles.scss';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<ChessGame />} />
			</Routes>
		</Router>
	);
}

export default App;