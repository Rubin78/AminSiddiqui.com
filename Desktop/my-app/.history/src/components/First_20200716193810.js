import React, { Component } from 'react';
import { Container, Row, Col,backgroundImage } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import hero1 from '../assests/';


// import car from './images/car.png'
// import src from '*.bmp';

class First extends Component {

     submitHandler=()=>{
       this.props.history.push('/second','setsample');


    }
    render() {
        return (
            <Container fluid style={{backgroundColor:'red'}}>

                <button onClick={this.submitHandler} >go to second page</button>




<backgroundImage src={hero1}  / >

            </Container>




        );
    }
}



const styles = {
    container: {
      
       

    
    }
};
export default First;