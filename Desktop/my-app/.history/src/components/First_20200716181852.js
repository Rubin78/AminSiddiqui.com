import React, { Component } from 'react';
import { container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class First extends Component {

     submitHandler=()=>{
       this.props.history.push('/second','setsample');


    }
    render() {
        return (
            <Container fluid style={{backgroundColor:'red'}}>

                <button onClick={this.submitHandler} >go to second page</button>



<Row>
<Col md="5" style={{backgroundColor:'green'}}>.col</Col>
<Col>.col</Col>
<Col>.col</Col>
<Col>.col</Col>
</Row>
            </Container-fluid>




        );
    }
}

export default First;