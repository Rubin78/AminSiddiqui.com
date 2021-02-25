import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Responsive } from "react-responsive";

class First extends Component {

     submitHandler=()=>{
       this.props.history.push('/second','setsample');


    }
    render() {
        return (
            <Container style={{backgroundColor:'red'}}>

                <button onClick={this.submitHandler} >go to second page</button>



<Row>
<Col>.col</Col>
</Row>
<Row>
<Col>.col</Col>
<Col>.col</Col>
<Col>.col</Col>
<Col>.col</Col>
</Row>
            </Container>




        );
    }
}

export default First;