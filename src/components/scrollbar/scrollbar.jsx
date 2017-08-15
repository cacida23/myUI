import React from 'react';
import './scrollbar.css';
class Scrollbar extends React.Component{
    render(){
        let innerComponent = "没有内容";
        if(this.props.component){
            innerComponent = this.props.component
        }
        return (
            <div className={this.props.scrollStyle} style={{height:`calc(100% - ${this.props.topThings}px)`}}>
                {innerComponent}
            </div>
        )
    }
}
export default Scrollbar