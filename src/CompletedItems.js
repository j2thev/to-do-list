import React, { Component } from 'react';

class CompletedItems extends Component {
	listTasks = (item) => {
		return (
			<li key={item.key}>
				{item.text}
			</li>
		);
	}

	render() {
		const completedEntries = this.props.entries;
		const listItems = completedEntries.map(this.listTasks);
		return (
			<div>
				Completed:
				<br />
        <ul className="completeList">{listItems}</ul>
			</div>
		);
	}
}

export default CompletedItems