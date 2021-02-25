import React, { Component } from 'react';

class First extends Component {

     submitHandler=()=>{
       this.props.history.push('/second');


    }
    render() {
        return (
            <div>
                <button onClick={this.submitHandler} >go to second page</button>
            </div>
        );
    }
}

export default First;