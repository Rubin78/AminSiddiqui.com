import React, { Component } from 'react';

class First extends Component {

     submitHandler=()=>{
       this.props.history.push('/second','setsample');


    }
    render() {
        return (
            <div>
              <div  style={{flex:1,backgroundColor:'red',height:500}}>ssususuusu</div>
            </div>
        );
    }
}

export default First;