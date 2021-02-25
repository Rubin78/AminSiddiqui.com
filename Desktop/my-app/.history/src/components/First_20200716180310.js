import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class First extends Component {

     submitHandler=()=>{
       this.props.history.push('/second','setsample');


    }
    render() {
        return (
            <Container style={{backgroundColor:'red'}}>

                <button onClick={this.submitHandler} >go to second page</button>
            </Container>
        );
    }
}

export default First;