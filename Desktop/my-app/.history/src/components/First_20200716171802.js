import React, { Component } from 'react';

class First extends Component {

     submitHandler=()=>{
       this.props.history.push('/second','setsample');


    }
    render() {
        return (
            <div>
              <div style={{flex:1,backgroundColor:'red'}}></div>
            </div>
        );
    }
}

export default First;