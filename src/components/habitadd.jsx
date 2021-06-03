import React, { memo } from 'react';

const Habitadd = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    }
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input type="text" ref={inputRef} className="add-input" placeholder="Habit" />
            <button className="add-button">Add</button>
        </form>
    );
});

export default Habitadd;








/* import React, { PureComponent } from 'react';

class Habitadd extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();
    onSubmit = (e) => {
        e.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    }
    render() {
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input type="text" ref={this.inputRef} className="add-input" placeholder="Habit" />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default Habitadd; */
