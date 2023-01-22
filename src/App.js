import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import Comments from './components/comments';

function App() {
	useEffect(() => {
		addUser();
	}, []);
	const addUser = () => {
		const user = {
			png: './img/avatars/image-juliusomo.png',
			webp: './img/avatars/image-juliusomo.webp',
			username: 'juliusomo'
		};

		axios
			.post('http://localhost:3001/user', user)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="bg-background font-Rubik">
			<Comments />
		</div>
	);
}

export default App;
