import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from '../node_modules/react-bootstrap/lib/Grid';
import Row from '../node_modules/react-bootstrap/lib/Row';
import Col from '../node_modules/react-bootstrap/lib/Col';

import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <header className="App-header">
          <h1>Hello React</h1>
            <Button href="https://github.com/styled-components/styled-components"
                    target="_blank"
                    rel="noopener"
                    primary>
                <a href="https://github.com/antonmishin2111/reactproject">Starts</a>
            </Button>
        </header>
      </Grid>
    );
  }
}

export default App;
