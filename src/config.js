export const myconfig = '{"settings":{"hasHeaders":true,"constrainDragToContainer":true,"reorderEnabled":true,"selectionEnabled":false,"popoutWholeStack":false,"blockedPopoutsThrowError":true,"closePopoutsOnUnload":true,"showPopoutIcon":true,"showMaximiseIcon":true,"showCloseIcon":true,"responsiveMode":"onload","tabOverlapAllowance":0,"reorderOnTabMenuClick":true,"tabControlOffset":10},"dimensions":{"borderWidth":5,"borderGrabWidth":15,"minItemHeight":10,"minItemWidth":10,"headerHeight":20,"dragProxyWidth":300,"dragProxyHeight":200},"labels":{"close":"close","maximise":"maximise","minimise":"minimise","popout":"open in new window","popin":"pop in","tabDropdown":"additional tabs"},"content":[{"type":"row","isClosable":true,"reorderEnabled":true,"title":"","content":[{"type":"column","isClosable":true,"reorderEnabled":true,"title":"","width":76.79914070891515,"content":[{"type":"row","isClosable":true,"reorderEnabled":true,"title":"","height":50,"content":[{"type":"stack","header":{},"isClosable":true,"reorderEnabled":true,"title":"","activeItemIndex":1,"height":100,"width":52.180028129395225,"content":[{"type":"component","component":"test-component","props":{"label":"1"},"componentName":"lm-react-component","isClosable":true,"reorderEnabled":true,"title":"lm-react-component"},{"type":"component","component":"test-component","props":{"label":"2"},"componentName":"lm-react-component","isClosable":true,"reorderEnabled":true,"title":"lm-react-component"}]},{"type":"stack","width":47.81997187060479,"isClosable":true,"reorderEnabled":true,"title":"","activeItemIndex":0,"content":[{"type":"component","component":"test-component","props":{"label":"4"},"componentName":"lm-react-component","isClosable":true,"reorderEnabled":true,"title":"lm-react-component"}]}]},{"type":"stack","header":{},"isClosable":true,"reorderEnabled":true,"title":"","activeItemIndex":1,"height":50,"content":[{"type":"component","component":"test-component","props":{"label":"3"},"componentName":"lm-react-component","isClosable":true,"reorderEnabled":true,"title":"lm-react-component"},{"type":"component","component":"test-component","props":{"label":"5"},"componentName":"lm-react-component","isClosable":true,"reorderEnabled":true,"title":"lm-react-component"}]}]},{"type":"stack","header":{},"isClosable":true,"reorderEnabled":true,"title":"","activeItemIndex":1,"width":23.200859291084853,"content":[{"type":"component","component":"test-component","props":{"label":"6"},"componentName":"lm-react-component","isClosable":true,"reorderEnabled":true,"title":"lm-react-component"},{"type":"component","component":"test-component","props":{"label":"7"},"componentName":"lm-react-component","isClosable":true,"reorderEnabled":true,"title":"lm-react-component"}]}]}],"isClosable":true,"reorderEnabled":true,"title":"","openPopouts":[],"maximisedItemId":null}'



var myconfig1={ 
             dimensions: {
                borderWidth: 5,
                minItemHeight: 200,
                minItemWidth: 200,
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
         } 