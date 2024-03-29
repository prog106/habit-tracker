import React, { Component } from 'react';
import Habit from './habit';
import Habitadd from './habitadd';

class Habits extends Component {
    render() {
        return (
            <>
				<Habitadd
                    onAdd={this.props.onAdd}
                />
                <ul>
                    {
                        this.props.habits.map(habit => (<Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                            />)
                        )
                    }
                </ul>
                <button className="reset-button" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;
