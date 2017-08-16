export const myconfig = {"settings":{"hasHeaders":true,"constrainDragToContainer":true,"reorderEnabled":true,"selectionEnabled":false,"popoutWholeStack":false,"blockedPopoutsThrowError":true,"closePopoutsOnUnload":true,"showPopoutIcon":false,"showMaximiseIcon":false,"showCloseIcon":false,"responsiveMode":"onload","tabOverlapAllowance":0,"reorderOnTabMenuClick":true,"tabControlOffset":10},"dimensions":{"borderWidth":5,"borderGrabWidth":15,"minItemHeight":200,"minItemWidth":300,"headerHeight":30,"dragProxyWidth":300,"dragProxyHeight":200},"labels":{"close":"close","maximise":"maximise","minimise":"minimise","popout":"open in new window","popin":"pop in","tabDropdown":"additional tabs"},"content":[{"type":"row","isClosable":false,"reorderEnabled":true,"title":"","content":[{"type":"column","isClosable":false,"reorderEnabled":true,"title":"","width":84.22976501305483,"content":[{"type":"row","isClosable":false,"reorderEnabled":true,"title":"","height":74.71620227038184,"content":[{"type":"stack","header":{},"isClosable":false,"reorderEnabled":true,"title":"","activeItemIndex":1,"height":100,"width":18.472135253600502,"content":[{"type":"react-component","component":"ProGame","id":"_chaoProGame","props":{"label":"1"},"componentName":"lm-react-component","isClosable":false,"reorderEnabled":true,"title":"<span class='icon-logo_paper_grey ico-handle' /><span class='icon-icon_pro_game ico-mid' /><span class='ico-mid'>游戏对象</span>"},{"type":"react-component","component":"test-component","props":{"label":"2"},"componentName":"lm-react-component","id":"_chaoWelcome","isClosable":false,"reorderEnabled":true,"title":"<span class='icon-logo_paper_grey ico-handle' /><span class='icon-icon_welcome ico-mid' /><span class='ico-mid'>欢迎</span>"}]},{"type":"stack","width":81.52786474639952,"isClosable":false,"reorderEnabled":true,"title":"","activeItemIndex":0,"content":[{"type":"react-component","component":"test-component","props":{"label":"4"},"componentName":"lm-react-component","isClosable":false,"id":"_chaoSense","reorderEnabled":true,"title":"<span class='icon-logo_paper_grey ico-handle' /><span class='icon-icon_scenes ico-mid' /><span class='ico-mid'>场景</span>"}]}]},{"type":"stack","header":{},"isClosable":false,"reorderEnabled":true,"title":"","activeItemIndex":0,"height":25.28379772961816,"content":[{"type":"react-component","component":"Files","props":{"label":"3"},"componentName":"lm-react-component","isClosable":false,"reorderEnabled":true,"id":"_chaoFiles","title":"<span class='icon-logo_paper_grey ico-handle' /><span class='icon-icon_project ico-mid' /><span class='ico-mid'>项目</span>"},{"type":"react-component","component":"Cmd","props":{"label":"5"},"componentName":"lm-react-component","isClosable":false,"reorderEnabled":true,"id":"_chaoCmd","title":"<span class='icon-logo_paper_grey ico-handle' /><span class='icon-icon_control ico-mid' /><span class='ico-mid'>控制台</span>"}]}]},{"type":"stack","header":{},"isClosable":false,"reorderEnabled":true,"title":"","activeItemIndex":0,"width":15.770234986945175,"content":[{"type":"react-component","component":"Option","props":{"label":"6"},"componentName":"lm-react-component","isClosable":false,"reorderEnabled":true,"title":"<span class='icon-logo_paper_grey ico-handle' /><span class='icon-icon_attribute ico-mid' /><span class='ico-mid'>属性</span>","id":"_chaoOption"},{"type":"react-component","component":"test-component","props":{"label":"7"},"componentName":"lm-react-component","isClosable":false,"reorderEnabled":true,"title":"<span class='icon-logo_paper_grey ico-handle' /><span class='icon-icon_layout ico-mid' /><span class='ico-mid'>布局</span>","id":"_chaoLayout"}]}]}],"isClosable":true,"reorderEnabled":true,"title":"","openPopouts":[],"maximisedItemId":null}



// var myconfig1={ 
//              dimensions: {
//                 borderWidth: 5,
//                 minItemHeight: 200,
//                 minItemWidth: 200,
//                 headerHeight: 20,
//                 dragProxyWidth: 300,
//                 dragProxyHeight: 200
//             },
//             content: [{
//                 type: 'column',
//                 content:[{
//                     id:'pro_game',
//                     type:'react-component',
//                     title:this.titleHeader+`pro_game`+this.titleLast+'游戏对象',
//                     component: 'progame',
//                     props: { label: 'A' }
//                 },{
//                 type: 'row',
//                 content:[{
//                     id:'b',
//                     type:'react-component',
//                     title:'b',
//                     component: 'b',
//                     props: { label: 'B' }
//                 },{
//                     id:'c',
//                     type:'react-component',
//                     title:'c',
//                     component: 'b',
//                     props: { label: 'C' }
//                     }]
//                 }]
//             }]
//          } 