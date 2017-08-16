import React from 'react';
import Scrollbar from '../scrollbar/scrollbar.jsx';
import { Collapse } from 'antd';
import Myinput from '../myinput/myinput'
const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const customPanelStyle = {
  background: '#565656',
  marginBottom: 0,
  border: 0,
};

class PropContent extends React.Component{
    constructor(props){
             super(props);
             this.state = {
                
             }   
    }
   
    render(){
        return (
         
            <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                    <div className="prop-item">
                        <Myinput></Myinput>
                    </div>
                </Panel>
                <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                <p>{text}</p>
                </Panel>
            </Collapse>
           
    );
    }
}
export default PropContent