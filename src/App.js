import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
class App extends Component {
	state = {
		todos: [
			{ id: 1, content: 'buy milk' },
			{ id: 2, content: 'play mario' },
		],
	};

	deleteTodo = (id) => {
		let todosList = this.state.todos.filter((e) => {
			return id !== e.id;
		});
		this.setState({
			todos: todosList
		})
	};

	render() {
		return (
			<div className="container ">
				<h1 className="center blue-text"> Todos's</h1>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
			</div>
		);
	}
}

export default App;
