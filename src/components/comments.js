import React, { useEffect, useState } from 'react';
import Comment from './comment';
import SendComment from './send-comment';

function Comments() {
	const [ data, setData ] = useState([]);
	useEffect(() => {
		const defaultData = async () => {
			const res = await fetch('data.json');
			const data = await res.json();
			setData(data);
		};
		defaultData();
	}, []);
	return (
		<div className="pt-8 pr-4 pb-8 pl-4">
			<div className="mb-4">
			{data.comments?.map(item => {
					return <Comment name={item.user.username} key={item.id} createdAt={item.createdAt} content={item.content} image={item.user.image.png}/>
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
