// import React from 'react';
// import ReactDOM from 'react-dom';
// import Main from './components/main'
// import App from './components/app'
// import injectTapEventPlugin from 'react-tap-event-plugin';
// window['React'] = React;
// window['ReactDOM'] = ReactDOM;

// import './icon/style.css'
// // import './icon/iconfont.css'
// // injectTapEventPlugin();
// ReactDOM.render(<App/>,document.getElementById('root'))
// function fullScreen() { 
//     var el = document.documentElement; 
//     var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen; 

//     if (typeof rfs != "undefined" && rfs) { 
//         rfs.call(el); 
//     } 
// };

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
// fullScreen();
// rightClick();
import React from 'react';
import ReactDOM from 'react-dom';
window['React'] = React;
window['ReactDOM'] = ReactDOM;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/app';
import injectTapEventPlugin from 'react-tap-event-plugin';

// window.onload=()=>{injectTapEventPlugin()}
console.log(injectTapEventPlugin)

const Main = () => {
  // injectTapEventPlugin()
  return(

    <App />

)}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);