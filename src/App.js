import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import Comments from './components/comments';

function App() {
	
	return (
		<div className="bg-background font-Rubik">
			<Comments />
		</div>
	);
}

export default App;
