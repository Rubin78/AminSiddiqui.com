// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// class Second extends Component {
//     render() {
//         console.log(this.props);
//         return (



            
//             <div>
//                 <Link to="/third" >Go to the third page</Link>

//         <div>{this.props.location.state}</div>
//             </div>
//         );
//     }
// }

// export default Second;








import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Container, Row, Col} from 'reactstrap';
import styles  from '../components/Second.css'
import hero1 from '../assests/hero1.jpg';
import tosee2 from '../assests/tosee2.webp';
import { Hidden } from '@material-ui/core';


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
<div>
    <Container fluid  className="containerBody2" style={{  backgroundImage:`url(${hero1})`,backgroundColor:'red'}} >
    <div style={{backgroundColor:'transparent',height:90,display:'flex'}}>

      
      <Navbar color="red" light expand="md"  style={{display:'flex',flex:1,position:'sticky'}} >
        <NavbarBrand href="/"><h4  className="textheader1" >Rubin Shaikh</h4></NavbarBrand>
        <NavbarToggler onClick={toggle} style={{color:'white',backgroundColor:'#F5F5F5'}} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto" navbar>
        
         
           
         </Nav>

         <NavLink  href="/components/"  className="textheader" >Home</NavLink>
         <NavLink href="/components/" className="textheader">About</NavLink> 
          <NavLink href="/components/" className="textheader">Skills</NavLink>
          <NavLink href="/components/" className="textheader">Experience</NavLink>
          <NavLink href="/components/" className="textheader">Project</NavLink>
          <NavLink href="/components/" className="textheader">Contact</NavLink>
        </Collapse>
      </Navbar>
    </div>


<Col sm="5"  style={{ display:'flex',flex:1,
alignItems:'space-between',justifyContent:'center',paddingLeft:40,}}>
<div style={{display:'flex',height:450,flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-start',marginBottom:20,}} > 

    <div style={{color:'white',fontSize:42,textAlign:'center',fontFamily:"Patua One",fontWeight:"bolder",letterSpacing:'.20em'}} >
    {/* <div style={{color:'#ffffff',fontSize:15,textAlign:"left",letterSpacing:'.1em',paddingLeft:60}}>HELLO,</div> */}
      
      DESIGN +
   <p style={{paddingBottom:-15}}>INNOVATION</p></div>
    {/* <button onClick={this.submitHandler} >go to second page</button> */}
    </div>
</Col>
    </Container>


<Container fluid   className="container2" style={{  backgroundImage:`url(${tosee2})`,backgroundColor:'red'}}>
<Row >
        <Col md="6" sm="6" className="container2column" style={{}} >

          <Col sm="12" classID="container2insider" style={{backgroundColor:'green',height:600}}>
            ssjs
            </Col>
        </Col>
        <Col md="6" sm="6" className="container2column"  style={{}}>


        <Col sm="12" classID="container2insider" style={{}}>
            <Col sm="8" style={{height:100,display:'flex',alignItems:'center'}}><h6 className="seondfontfamily" >Hi there! I am Rubin Shaikh</h6></Col>
            <Col sm="8" className="seondfontfamily"  style={{lineHeight:1.8,}}>
              A passionate programmer , born and brought up in India. I am a  Web Developer with React.js, React.Native, Flex,Boostrap4,Html5,Css3.
              I am Currently  Working in Snoop Technologies Pvt. Ltd.
I successfully completed my Engineering with specialization in 'Information Technology'.

Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
Along with that, I also help people as a COACH on their journey of becoming a professional programmer. I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
</Col>
            <div></div>

            </Col>
        </Col>

        
        
      </Row>
</Container>

    </div>
  );
}

export default Example;