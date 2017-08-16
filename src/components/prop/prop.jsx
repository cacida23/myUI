import React from 'react';
import Scrollbar from '../scrollbar/scrollbar.jsx';
import PropContent from './prop-content'

import './prop.css'
class Prop extends React.Component{
    constructor(props){
             super(props);
             this.state = {
                
             }   
    }
    render(){
        return (
           <div >
                <div className="prop-content">
                     <div className="prop-header">
                    这是头部
                </div>
                    <Scrollbar scrollStyle='myScroller-1' topThings='33' component={(<PropContent></PropContent>)}>
                    </Scrollbar>`
                </div>
           </div>
    );
    }
}
export default Prop