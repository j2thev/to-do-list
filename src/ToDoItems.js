import React, { Component } from 'react';

class TodoItems extends Component {
	createTasks = (item) => {
		return (
			<li key={item.key} onClick={() => { this.props.completeItem(item.key) }}>
				{item.text}
			</li>
		);
	}

	render() {
		const todoEntries = this.props.entries;
		const listItems = todoEntries.map(this.createTasks);
		return (
			<div>
				What to do:
				<br />
        <ul className="theList">{listItems}</ul>
			</div>
		);
	}
}

export default TodoItems