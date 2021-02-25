import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive'



const Example = () => {
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
      query: '(max-device-width: 1224px)'
    })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
   
class First extends Component {

     submitHandler=()=>{
       this.props.history.push('/second','setsample');


    }
    render() {
        return (
            <div>
              <div  style={{flex:1,backgroundColor:'red',height:980}}>ssususuusu
              
              </div>
            </div>
        );
    }
}

export default First;