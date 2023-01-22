import React from 'react';
import Comment from './comment';
import SendComment from './send-comment';

function Comments() {
	return (
		<div className="pt-8 pr-4 pb-8 pl-4">
			<div className='mb-4'>
				<Comment />
			</div>
			<div>
				<SendComment />
			</div>
		</div>
	);
}

export default Comments;
