import React, { PureComponent } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Habits from './components/habits';

class App extends PureComponent {
	state = {
		habits: [
			{id: 1, name: 'Reading', count: 0},
			{id: 2, name: 'Running', count: 0},
			{id: 3, name: 'Coding', count: 0},
		],
	}
	handleIncrement = (habit) => {
		const habits = this.state.habits.map(function(item) {
			if(item.id === habit.id) {
				return { ...habit, count: habit.count+1 };
			} else return item;
		});
		// const habits = [...this.state.habits];
		// const index = habits.indexOf(habit);
		// habits[index].count++;
		this.setState({ habits: habits });
	};
	handleDecrement = (habit) => {
		const habits = this.state.habits.map(function(item) {
			if(item.id === habit.id) {
				const count = habit.count-1;
				return { ...habit, count: count < 0 ? 0 : count };
			} else return item;
		});
		this.setState({ habits: habits });
		// const habits = [...this.state.habits];
		// const index = habits.indexOf(habit);
		// if(habits[index].count > 0) {
		// 	habits[index].count--;
		// 	this.setState({ habits: habits });
		// }
	};
	handleDelete = (habit) => {
		// const habits = [...this.state.habits];
		// const index = habits.indexOf(habit);
		// delete habits[index];
		const habits = this.state.habits.filter(item => item.id !== habit.id);
		this.setState({ habits: habits });
	};
	handleReset = () => {
		const habits = this.state.habits.map(function(item) {
			if(item.id !== 0) return { ...item, count: 0 };
			else return item;
		});
		this.setState({ habits: habits });
		// const habits = this.state.habits.map(habit => {
		// 	habit.count = 0;
		// 	return habit;
		// });
		// this.setState({ habits: habits });
	};
	handleAdd = (name) => {
		const habits = [...this.state.habits, {id: Date.now(), name: name, count: 0}];
		this.setState({ habits: habits });
	};
	render() {
		return (
			<>
				<Navbar 
					totalCount={this.state.habits.filter(item => item.count > 0).length}
				/>
				<Habits 
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
					onAdd={this.handleAdd}
					onReset={this.handleReset}
				/>
			</>
		);
	}
}

export default App;
