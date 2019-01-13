import React, { Component } from 'react';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Main from './componets/Main';
import Header from './componets/Header';
import Menu from './componets/Menu';


import styled from 'styled-components';

const url = process.env.PUBLIC_URL + '/img/bagraund.png';

const HeaderWrapper = styled.header`
    width: 100%;
    background-color:  rgba(36, 36, 36, 0.8);
`
const MenuWrapper = styled.div `
    padding-top: 20px;
    padding-bottom: 25px;
`

const MainWrapper = styled.main `
    padding-top: 130px;
    padding-bottom: 60px;
    background: url(${url}) no-repeat center center;
    background-size: cover;
    min-height: 600px;
`

class App extends Component {
  render() {
    return (
        <div className="App">
            <HeaderWrapper>
                <Grid>
                    <Header />
                </Grid>
            </HeaderWrapper>
            <MenuWrapper>
                <Grid>
                    <Menu />
                </Grid>
            </MenuWrapper>
            <MainWrapper>
                <Grid>
                    <Main />
                </Grid>
            </MainWrapper>
        </div>
    );
  }
}

export default App;
