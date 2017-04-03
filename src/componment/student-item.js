import React, {Component} from 'react';
import './content-student.css';

export default class StudentItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="student-item">
                {this.props.name.sname}
            </div>
        );
    }
}

