import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SendComment() {
	const [ user, setUser ] = useState([]);
	useEffect(() => {
		addUser();
	}, []);
	const addUser = () => {
		const user = {
			png: './img/avatars/image-juliusomo.png',
			webp: './img/avatars/image-juliusomo.webp',
			username: 'juliusomo'
		};
		setUser(user);
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
		<div className="p-4 flex flex-col bg-component-background rounded-lg">
			<form>
				<textarea className="focus:outline-none border-[1px] pt-3 pl-6 h-24 mb-3.5 text-base font-normal text-grayish-blue leading-6 border-light-gray rounded-md w-[100%] resize-none">
					Add a comment...
				</textarea>
				<div className="flex flex-row justify-between items-center">
					<div className="w-8 h-8 rounded-full">
						<img src={user.png} alt="user-avatar" />
					</div>
					<button className="text-base text-white  leading-6 uppercase rounded-md bg-moderate-blue pt-3 pl-[30px] pr-[30px] pb-3">
						Send
					</button>
				</div>
			</form>
		</div>
	);
}

export default SendComment;
