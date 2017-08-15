function treeStyleCtrl(){
    let trees = document.querySelectorAll('.draggable-tree');
    let treekeys = Array.from(trees);
    treekeys.forEach((treekey)=>{
       let treeNodes =  treekey.querySelectorAll('.ant-tree-node-content-wrapper');
       let treeNodeKeys = Array.from(treeNodes);
       let rootLeft =  treekey.getBoundingClientRect().left;
       treeNodeKeys.forEach((treeNodeKey)=>{
           let nodeLeft = treeNodeKey.getBoundingClientRect().left;
           let willGo = nodeLeft - rootLeft-6;
           if(!willGo){
               return
           }
           let _willGo = -willGo;
           treeNodeKey.style="padding-left:"+willGo+"px;"+"left:"+_willGo+"px;"+"padding-right:"+4+"px";
       })  
    }) 

}
function treeClick(){
    // alert('in')
     let switchers =  document.querySelectorAll('.ant-tree-switcher');
     let switcherKeys = Array.from(switchers);
     switcherKeys.forEach((switcherKey)=>{
         switcherKey.onclick =function(){
            //  alert('ok')
             setTimeout(()=>{
                treeStyleCtrl();
             },10)
             
         }
     })
}
export {treeStyleCtrl,treeClick}
