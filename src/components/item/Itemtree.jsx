import React from 'react';
import { Tree } from 'antd';
import { treeStyleCtrl ,treeClick } from '../tree/tree.js';
import PubSub from 'pubsub-js';
const TreeNode = Tree.TreeNode;

const x = 3;
const y = 2;
const z = 1;
const gData = [];


const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

class Itemtree extends React.Component {

  state = {
    gData,
    expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
    selects:[]
  }
  onDragEnter = (info) => {
    console.log(info);
      setTimeout(()=>{
         treeStyleCtrl();
    },10)
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  }
  onDrop = (info) => {
    console.log(info);
    
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    // const dragNodesKeys = info.dragNodesKeys;
    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.gData];
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (info.dropToGap) {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i - 1, 0, dragObj);
      }
    } else {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      });
    }
    this.setState({
      gData: data,
    });
    setTimeout(()=>{
         treeStyleCtrl();
    },200)
   
  }
  onSelect = (t,e) =>{
    this.state.selects = [];
    var t = t[0];
    this.state.selects.unshift(t);
    var target = e.node.refs.selectHandle;
    const findPre = (target)=>{
      console.log('in')
      var pre = target.parentNode.parentNode.parentNode.childNodes[1]
    if(pre&&pre.nodeName&&pre.nodeName=="A"){
      console.log("inif")
        this.state.selects.unshift(pre.innerText)
        findPre(pre)
    }else{
      PubSub.publish('select',this.state.selects);
      return;
    }
    }
    findPre(target);
  }
  render() {
    const loop = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode key={item.key} title={item.key}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode key={item.key} title={item.key} />;
    });
    return (
      <Tree
        className="draggable-tree"
        defaultExpandedKeys={this.state.expandedKeys}
        draggable
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
        onSelect={this.onSelect}
        // onClick = {this.treeStyleCtrl}
      >
        {loop(this.state.gData)}
      </Tree>
    );
  }
 componentWillMount() {
    treeStyleCtrl();
    treeClick();
  }
  componentDidMount() {
    this.itemTree = document.getElementById("itemTree")
    console.log(this.itemTree,"a")
  }
  // componentUpDated() {
  //   setTimeout(()=>{
  //       treeStyleCtrl();
  //   },200)
  
  // }
}
export default Itemtree