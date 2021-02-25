import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class First extends Component {

     submitHandler=()=>{
       this.props.history.push('/second','setsample');


    }
    render() {
        return (
            <Container style={{backgroundColor:'red'}}>

                <button onClick={this.submitHandler} >go to second page</button>
                <Container className="themed-container" fluid="sm">.container-sm</Container>



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