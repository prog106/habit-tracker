import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    // componentDidCatch - 에러를 캐치했을 때
    // componentDidMount - 컴포넌트가 등록되었을 때
    // componentDidUpdate - 컴포넌트가 업데이트되었을 때
    // componentWillMount - 컴포넌트가 마운트될 때
    // componentWillReceiveProps - 컴포넌트가 props를 받을 때
    // componentWillUnmount - 컴포넌트가 언마운트될 때
    // componentWillUpdate - 컴포넌트가 업데이트될 때
    componentDidMount() {
        // 새로운 컴포넌트가 UI상에 등록되었을 때 - 로딩스피너 노출 많이 사용
        console.log(`Didmount - ${this.props.habit.name}`);
    };
    componentWillUnmount() {
        // 컴포넌트를 UI상에서 지우기 전에 호출
        console.log(`Willmount - ${this.props.habit.name}`);
    }
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };
    render() {
        const { name, count } = this.props.habit; // 같은 변수 이름끼리 매칭됨.
        // const name = this.props.habit.name;
        // const count = this.props.habit.count;
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
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;
