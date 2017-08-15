import React from 'react';
import Scrollbar from '../scrollbar/scrollbar'
import Itemtree from './Itemtree.jsx'
import './item.css'
import Itemcontent from './itemContent.jsx'
class Item extends React.Component{
    render(){
        return (
            <div>
                <div id="itemTree">
                    <Scrollbar scrollStyle='myScroller-1' topThings='0' component={(<Itemtree></Itemtree>)}>
                     </Scrollbar>
                </div>
                <div id="itemsplice"></div>
                <div id="itemContent">
                     <Itemcontent></Itemcontent>
                </div>
            </div>
        )
    }
}
export default Item