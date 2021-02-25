import React, { Component } from 'react';

class First extends Component {

     submitHandler=()=>{
       this.props.history.push('/second','setsample');


    }
    render() {
        return (
            <Container fixed>

                <button onClick={this.submitHandler} >go to second page</button>
            </Container>
        );
    }
}

export default First;