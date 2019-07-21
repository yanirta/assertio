import React, { Component } from 'react';
import './App.css';
import ReportTopBar from './components/ReportTopBar';
import ChecksList from './components/ChecksList'
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckInfo from './components/CheckInfo';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      checks: {},
      isLoaded: false,
      selection: null,
      selectionId: 1,
    };
    this.getChecks();
  }

  getChecks() {
    fetch("http://localhost:8080/api/0.0.1/history", {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer abc'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          var checks = [];
          result.forEach((c) => {
            var uname = c.check.uname;
            if (!(uname in checks))
              checks[uname] = [];
            checks[uname].push(c);
          });

          Object.keys(checks).forEach((key) => {
            checks[key].reverse();
          });

          this.setState({
            checks: checks,
            isLoaded: true,
            selection: Object.values(checks)[0],
          });
        },
        (error) => {
          this.setState({
            error: error
          });
        }
      )
  }

  selectionUpdate = (item, id) => {
    this.setState({
      selection: item,
      selectionId: id,
    });
  }

  render() {
    const { error, checks, isLoaded, selection, selectionId } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <ReportTopBar />
            <Grid container>
              <Grid item sm={3}>
                <ChecksList checks={checks} onSelect={this.selectionUpdate} selectedId={selectionId} />
              </Grid>
              <Grid item sm={7}>
                <CheckInfo checkData={selection} />
              </Grid>
            </Grid>
          </MuiThemeProvider>
        </React.Fragment>
      );
    }
  }
}

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        'background-color': '#1976d2',
        'color': '#fff',
      },
    },
  },
});

export default App;
