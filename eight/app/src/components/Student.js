import React, { Component } from 'react';

class Student extends Component {
    state = { }
    render() {
        return (
            <div>
                <h2>Name: {this.props.student.name}</h2>
            </div>
        );
    }
}

export default Student;
