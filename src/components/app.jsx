import React from 'react';
import GoldenLayout from 'golden-layout';
import Header from './header/header'
import Gamepro from './game-pro/game-pro'
import Item from './item/item'
import './app-init.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
        this.titleHeader=`<span class="icon-logo_paper_grey"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>&nbsp;<span class="icon-icon_`
        this.titleLast=`"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>&nbsp;`
        this.lmCom={
            progame:{icon:'pro_game'}    
        };
        // this.addLayout = this.addLayout.bind(this);
        this.dragWaH = this.dragWaH.bind(this);
    }
    // addLayout(){
    //   this.myNewLayout.registerComponent('Item',Item);
    //   this.myNewLayout.init();
    // }
    /*reset drag's width and hight */
    dragWaH(){
        /*lm_splitter */
        var SeekBars = document.querySelectorAll('.lm_splitter');
        SeekBars.forEach((SeekBar)=>{
            if(SeekBar.style.width&&Number.parseInt(SeekBar.style.width) == 5 ){
                SeekBar.style.width = '1px'; 
            }
            if(SeekBar.style.height&&Number.parseInt(SeekBar.style.height) == 5 ){
                SeekBar.style.height = '1px'; 
            }
        })
        var headers = document.querySelectorAll('.lm_header');
        headers.forEach((header)=>{
            header.style.height = '24px'
        })
        /* lm_drag_handle*/ 
        var handlers = document.querySelectorAll('.lm_drag_handle');
        handlers.forEach((handler)=>{
            if(handler.style.left&&Number.parseInt(handler.style.left) == -5 ){
                handler.style.left = '-1px'; 
            }
            if(handler.style.width&&Number.parseInt(handler.style.width) == 15 ){
                handler.style.width = '8px'; 
            }
        })
    }
    render(){
         this.myNewLayout = new GoldenLayout({ 
             dimensions: {
                borderWidth: 5,
                minItemHeight: 200,
                minItemWidth: 10,
                headerHeight: 20,
                dragProxyWidth: 300,
                dragProxyHeight: 200
            },
            content: [{
                type: 'column',
                content:[{
                    id:'pro_game',
                    type:'react-component',
                    title:this.titleHeader+`pro_game`+this.titleLast+'游戏对象',
                    component: 'progame',
                    props: { label: 'A' }
                },{
                type: 'row',
                content:[{
                    id:'b',
                    type:'react-component',
                    title:'b',
                    component: 'b',
                    props: { label: 'B' }
                },{
                    id:'c',
                    type:'react-component',
                    title:'c',
                    component: 'b',
                    props: { label: 'C' }
                    }]
                }]
            }]
         },document.getElementById('layout'))
        //  myLayout.registerComponent('test-component',Item);
        this.myNewLayout.on('initialised',()=>{
           this.dragWaH()
        })
        this.myNewLayout.on('stateChanged',()=>{
            this.dragWaH()
        })
        this.myNewLayout.registerComponent('progame',Gamepro);
        this.myNewLayout.registerComponent('b',Item);
        this.myNewLayout.registerComponent('c',Gamepro);
        this.myNewLayout.init();
        // setTimeout(
        //     ()=>{
        //           var state = JSON.stringify(this.myNewLayout.toConfig());
        // console.log(state)      
        //     },1000
        // )
        
        return (
            <div>
                <Header></Header>
            </div>  
        )
    }    
}
export default App