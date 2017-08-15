import React, {Component} from 'react';
import App from './app'
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Console extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>hello wrold</div>
        <App></App>
      </MuiThemeProvider>
    );
  }
}

export default Console;
