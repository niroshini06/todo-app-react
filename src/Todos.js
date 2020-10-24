import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
	let todosList = todos.length ? (
		todos.map((e) => {
			return (
				<div className="collection-item" key={e.id}>
					<span onClick={() => {deleteTodo(e.id)}}> {e.content} </span>
				</div>
			);
		})
	) : (
		<p className="center"> 'You have no todos left' </p>
	);

	return (<div className="todos collection">{todosList}</div>)
};

export default Todos;
