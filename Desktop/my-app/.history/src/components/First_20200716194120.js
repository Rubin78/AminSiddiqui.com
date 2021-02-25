import React, { Component } from 'react';
import { Container,image} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import hero1 from '../assests/hero1.jpg';


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




<image src={hero1.jpg} style={{   
       
        height: '100vh'}} / >

            </Container>




        );
    }
}



const styles = {
    container: {
      
       

    
    }
};
export default First;