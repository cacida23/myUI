import React from 'react';
import ReactDOM from 'react-dom';
import MyTree from '../tree/tree.jsx';
import Scrollbar from '../scrollbar/scrollbar'
class Gamepro extends React.Component{
    render(){
      return (
        <div>
          <div className='mati-input'>
          <span className=' '>
           <span className="icon-icon_add"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
          </span>
          <div className='mati-input-content'>
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
          <Scrollbar scrollStyle='myScroller-1' topThings='33' component={(<MyTree></MyTree>)}>
          </Scrollbar>
        </div>
      )
     };
}
export default Gamepro