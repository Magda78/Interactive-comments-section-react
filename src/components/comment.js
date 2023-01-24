import React from 'react';

function Comment({id,name,createdAt,content,image}) {
	return (
		<div className="p-4 flex flex-col bg-component-background rounded-lg mb-4">
			<div className="h-8 mb-5 rounded-full bg-red-500 flex flex-row justify-start items-center">
				<div className="w-8 h-8 rounded-full mr-4">
					<img src={image} alt="avatar" />
				</div>
				<h1 className="m-8 text-dark-blue text-base font-medium">{name}</h1>
				<h2 className="text-grayish-blue text-base font-normal">{createdAt}</h2>
			</div>
			<div className="text-grayish-blue text-base font-normal mb-4">{content}</div>
			<div className=" flex flex-row justify-between">
				<div className="bg-very-light-gray flex flex-row pt-2.5 pr-[35px] pb-2.5 pl-[35px] space-x-3.5 rounded-lg">
					<button className="text-light-grayish-blue">+</button>
					<p className="text-moderate-blue text-base font-medium">20</p>
					<button className="text-light-grayish-blue">-</button>
				</div>
				<div className="flex flex-row items-center text-moderate-blue">
					<svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
							fill="#5357B6"
						/>
					</svg>
					<h2 className="ml-2 font-medium">Reply</h2>
				</div>
			</div>
		</div>
	);
}

export default Comment;
