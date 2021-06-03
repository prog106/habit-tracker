import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <span className="icon"><i className="fas fa-leaf"></i></span>
                <span className="title">Habit Tracker</span>
                <span className="count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;
