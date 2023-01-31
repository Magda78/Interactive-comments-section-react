import React, { useEffect, useState } from 'react';
import Comment from './comment';
import SendComment from './send-comment';

function Comments() {
	const [ data, setData ] = useState([]);
	useEffect(() => {
		const defaultData = async () => {
			const res = await fetch('http://localhost:3001/comment');
			const data = await res.json();
			console.log('data front',data)
			setData(data);
		};
		defaultData();
	}, []);
	return (
		<div className="pt-8 pr-4 pb-8 pl-4">
			<div className="mb-4">
				{console.log('data front',data)}
			{data?.map(item => {
				const imagePath = "http://localhost:3001/uploads/" +`${item.png}`
					return <Comment name={item.username} key={item.id} createdAt={item.createdAt} content={item.content} image={imagePath}/>
				})}
				{console.log(data.comments)}
			</div>
			<div>
				<SendComment />
			</div>
		</div>
	);
}

export default Comments;
