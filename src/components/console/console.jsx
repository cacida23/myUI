import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import "./console.css"
class Console extends React.Component{
    constructor(props){
             super(props);
             this.state = {
               value: 'this is log'
             }   
    }
    contranTabs=(x,value)=>{
        let conTitleitems = document.querySelectorAll(".con-title-item");
        let conTitles = Array.from(conTitleitems)
        conTitles.forEach((conTitle)=>{
            conTitle.style.opacity="0.48"
        })
        this.refs[`con-title-${x}`].style.opacity="1";
        this.refs.conspan.style.left=`${(x-1)*60}px`
        this.setState({value})
    }
    render(){
      
        return (
           <div>
              <div className="con-header"> 
                  <div className="con-title">
                    <div className="con-title-item" ref="con-title-1" onClick={this.contranTabs.bind(this,1,"log")}>
                      log
                    </div>
                    <div className="con-title-item" ref="con-title-2" onClick={this.contranTabs.bind(this,2,"err")}>
                      error
                    </div>
                  </div>
                  <div className="con-bottom">
                    <div className="con-span" ref="conspan">
                    </div>
                  </div>
                  <div>
                    this is {this.state.value}
                  </div>
               </div>
          
          
          
           </div>
    );
    }
}
export default Console