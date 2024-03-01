import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeClass extends Component {
    constructor(props) {
        super(props);
        this.state={
            college:'MKCE',
            department:'AIML'
        }

    }
    changeDepartment= () => {
        this.setState({department:'AIDS'})
    }
    render() {
        return (
            <div>
               <h4>College Name: {this.state.college}</h4>
               <h4>Department Name:{this.state.department}</h4>
               <button onClick={this.changeDepartment}>Change Department</button>
            </div>
        );
    }
}

HomeClass.propTypes = {

};

export default HomeClass;