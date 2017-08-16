import React from 'react';
import {Slider} from 'antd'
import './slider.css'
const style = {
    sliderCon:{
        width: '120px',
        display: 'inline-block',
        float: 'right',
        position:'relative',
        background:"#565656",
        top:'-5px'
    }
 
};
class Myslider extends React.Component{
    render(){
      return (
        <div>
             <div style={style.sliderCon}>
                 <Slider defaultValue={30}/>
             </div>
        </div>
      )
     };
}
export default Myslider