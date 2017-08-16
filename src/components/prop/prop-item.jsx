import React from 'react';
import Myinput from '../myinput/myinput'
import Myslider from '../myslider/Slider'
class PropItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:{
              
            }
        }
    }
    render(){
      console.log(this.props)
      return (
        <div className="prop-item-wraper">
          <div className="prop-item-text">
          {this.props.Itemtext}
          </div>
          <div className="prop-item-content">
              <div className="doubleInput" style={{display:`${this.props.Itemstyle=="doubleInput"?"block":"none"}`}}>
                  <div>
                    <div className="item-prop">{this.props.Itemprops[0]}</div>
                    <Myinput></Myinput>
                  </div>
                  <div>
                     <div className="item-prop">{this.props.Itemprops[1]}</div>
                    <Myinput></Myinput>
                  </div>
              </div>
              <div className="onlyInput" style={{display:`${this.props.Itemstyle=="onlyInput"?"block":"none"}`}}>
                <div>
                  <div className="item-prop" style={{display:`${this.props.Itemprops[0]==""?"none":"block"}`}}>{this.props.Itemprops[0]}</div>
                  <Myinput></Myinput>
                </div>
              </div>
          </div> 
        </div>
        
      )
     };
}
export default PropItem