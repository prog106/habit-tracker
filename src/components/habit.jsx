import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };
    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    };
    handleDecrement = () => {
        if(this.state.count > 0) this.setState({count: this.state.count - 1});
    };
    render() {
        // console.log(this.props.habit);
        const { name, count } = this.props.habit; // 같은 변수 이름끼리 매칭됨.
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;
