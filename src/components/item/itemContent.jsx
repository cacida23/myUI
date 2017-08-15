import React from 'react';
import Scrollbar from '../scrollbar/scrollbar'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Slider from 'material-ui/Slider' 
import {Slider} from 'antd'
import PubSub from 'pubsub-js';
import './item.css'
import { Breadcrumb } from 'antd'
// import Itemcontent from './Itemcontent.jsx'
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
function onChange(value) {
  console.log('onChange: ', value);
    this.setState({scale:value});
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}
class Itemcontent extends React.Component{
    constructor(props){
             super(props);
             this.state = {
                Breads: ['','',''],
                contentList: ["avatar.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg"
                ,"avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg"],
                url:'D:/\myui/\myui',
                scale:132
             }   
        }
        
    render(){
        // massage subscriber
        PubSub.subscribe("select",(message,date)=>{
            this.setState({Breads:date});
        })
        const onChange = (value)=> {
            console.log('onChange: ', value);
            let scale =240*value/100+60; 
             this.setState({scale});
            }

        const onAfterChange = (value) => {
            console.log('onAfterChange: ', value);
            }
        return (
            <div>
                <div className='itemHeader'>
                    <Breadcrumb separator=">">
                        {this.state.Breads.map((Bread)=>{
                           return (<Breadcrumb.Item key={Bread}>{Bread}</Breadcrumb.Item>)
                        })}
                        
                    </Breadcrumb>
                </div>
                <div className="itemList">
                    <ul className="contentList" >
                        {
                            this.state.contentList.map((content,index)=>{
                                return (
                                    <li key={index} className="contentLi" style={{width:`${this.state.scale}px`,height:`${this.state.scale}px`}  }>
                                        <div>
                                            <img key={content} src={`./img/${content}`}></img>
                                        </div>
                                        <h3>{content}</h3>
                                     </li>)
                            })
                        }
                    </ul>
                </div>
                <div className="itemfoot">
                     <h3>{this.state.url}</h3>  
                     <div style={style.sliderCon}>
                        <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
                     </div>
                </div>
            </div>
        )
    }
}
export default Itemcontent