import React from 'react';
import Scrollbar from '../scrollbar/scrollbar'
import PubSub from 'pubsub-js';
import './item.css'
import { Breadcrumb } from 'antd'
// import Itemcontent from './Itemcontent.jsx'
class Itemcontent extends React.Component{
    constructor(props){
             super(props);
             this.state = {
                Breads: ['l','i','j'],
                contentList: ["avatar.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg"
                ,"avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg","avater2.jpg"]
             }   
        }
    render(){
        // massage subscriber
        PubSub.subscribe("select",(message,date)=>{
            this.setState({Breads:date});
        })
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
                    <ul className="contentList">
                        {
                            this.state.contentList.map((content)=>{
                                return (
                                    <li className="contentLi">
                                        <div>
                                            <img key={content} src={`./img/${content}`}></img>
                                        </div>
                                        <h3>{content}</h3>
                                     </li>)
                            })
                        }
                    </ul>
                </div>
                <div className="itemfoot"></div>
            </div>
        )
    }
}
export default Itemcontent