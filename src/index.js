import React from 'react';
import ReactDOM from 'react-dom';
import GoldenLayout from 'golden-layout';import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/app';
window['React'] = React;
window['ReactDOM'] = ReactDOM;

import './icon/style.css'
// import './icon/iconfont.css'
ReactDOM.render(<App/>,document.getElementById('root'))
function fullScreen() { 
    var el = document.documentElement; 
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen; 

    if (typeof rfs != "undefined" && rfs) { 
        rfs.call(el); 
    } 
};
function rightClick(){
    window.oncontextmenu = function (){
        return false;
    }
    window.onmousedown = function(ev){
        ev.preventDefault();
        if(ev.button == "2"){
            
        }
    }
}
fullScreen();
rightClick();
