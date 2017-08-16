import React from 'react';
import './myinput.css'
class Myinput extends React.Component{
    render(){
      return (
        <div className='myinput'>
          <div className='my-input'>
          <div className='my-input-content'>
           <input type="text" />
           <span className='in-icon'></span>
           <div className='input-bottom-l'>
            <div className='input-side-content'>  </div>
           </div>
           <div className='input-bottom-r'>
            <div className='input-side-content'></div>
           </div>
          </div>
          </div>
        </div>
      )
     };
}
export default Myinput