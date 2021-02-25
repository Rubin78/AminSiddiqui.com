
<Container fluid className="container6">


<Col md="12">
<div style={{height:100,display:'flex',justifyContent:'center',alignItems:'flex-end',color:'white',marginBottom:20}}>
      <h1 data-aos="fade-up-left" className="Aboutme">PROJECTS</h1>
    </div>
    <CardDeck data-aos="fade-up-left" data-aos="flip-up-right"> 
    <Card className="cardproject" >
        <CardImg   top width="100%" height="77%" src={github} style={{borderTopLeftRadius:8,borderTopRightRadius:8}} alt="Card image cap" />
        <CardText >    

        <div>
          <div style={{height:35,backgroundColor:'red',textAlign:'center'}}>
            <Button color="secondary"> Project Details</Button>{' '} </div>
        {/* <Button color="secondary">Details</Button>{' '} */}
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',height:60,backgroundColor:'blue',}}>
        <Button color="success">See Live</Button>{' '}
      <Button color="success">Source Code</Button>{' '}
      <Button color="success">Watch Video</Button>{' '}
      </div>
       </div>

</CardText> </Card>
        <Card className="cardproject" >
        <CardImg top width="100%" height="77%" src={download} style={{borderTopLeftRadius:8,borderTopRightRadius:8}} alt="Card image cap" />
        <CardText >
          
          
        <div>
          <div style={{height:35,backgroundColor:'red',textAlign:'center'}}>
            <Button color="secondary"> Project Details</Button>{' '} </div>
        {/* <Button color="secondary">Details</Button>{' '} */}
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',height:60,backgroundColor:'blue',}}>
        <Button color="success">See Live</Button>{' '}
      <Button color="success">Source Code</Button>{' '}
      <Button color="success">Watch Video</Button>{' '}
      </div>
       </div>
          
          </CardText> </Card>
        <Card className="cardproject" >
        <CardImg top width="100%" height="77%" src={bitbucket} style={{borderTopLeftRadius:8,borderTopRightRadius:8}} alt="Card image cap" />
        <CardText >
          
        <div>
          <div style={{height:35,backgroundColor:'red',textAlign:'center'}}>
            <Button color="secondary"> Project Details</Button>{' '} </div>
        {/* <Button color="secondary">Details</Button>{' '} */}
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',height:60,backgroundColor:'blue',}}>
        <Button color="success">See Live</Button>{' '}
      <Button color="success">Source Code</Button>{' '}
      <Button color="success">Watch Video</Button>{' '}
      </div>
       </div>
          
          </CardText> </Card>


        <Card  className="cardproject" >
        <CardImg top width="100%" height="77%" src={unnamed} style={{borderTopLeftRadius:8,borderTopRightRadius:8}} alt="Card image cap" />
        <CardText >
          
          
          
        <div>
          <div style={{height:35,backgroundColor:'red',textAlign:'center'}}>
            <Button color="secondary"> Project Details</Button>{' '} </div>
        {/* <Button color="secondary">Details</Button>{' '} */}
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',height:60,backgroundColor:'blue',}}>
        <Button color="success">See Live</Button>{' '}
      <Button color="success">Source Code</Button>{' '}
      <Button color="success">Watch Video</Button>{' '}
      </div>
       </div>
          
          </CardText>  
        </Card>
      
</CardDeck>
  
  </Col> 


</Container>