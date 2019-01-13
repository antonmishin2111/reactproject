import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';


const Repear = styled.div `
    color:  #464646;
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
`
const WorkTime = styled.div `
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    
    span {
        display: block;
        color: #464646;
        font-size: 21px;
        font-weight: 700;
        
    }
`
const Calls = styled.div `
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    
    span {
        display: block;
        color: #464646;
        font-size: 21px;
        font-weight: 700;
        
    }
`
const CallBtn = styled.button `
    border-radius: 22px;
    background-color:  #3fc7db;
    border: none;
    padding: 15px 22px;
    color:  #ffffff;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;    
`

class Adress extends React.Component {
    render(){
        return (
            <span>{this.props.addr}</span>
        )
    }
}
class TelNumber extends React.Component {
    render(){
        return (
            <span>{this.props.tel}</span>
        )
    }
}

class Menu extends React.Component {
    render () {
        return (
            <Row>
                <Col lg={3}>
                    <Repear>Ремонт айфонов в сервисном центре на выезде</Repear>
                </Col>
                <Col lg={3} lgOffset={1}>
                    <WorkTime>Пн-пт с 10 до 20, сб,вс с 11 до 18
                        <Adress addr="Ленинская, 301"/>
                    </WorkTime>
                </Col>
                <Col lg={3}>
                    <Calls>Звонки принимаются 24 часа
                        <TelNumber tel="8 (846) 922 55 44"/>
                    </Calls>
                </Col>
                <Col lg={2}>
                    <CallBtn>Заказать зваонок</CallBtn>
                </Col>
            </Row>
        )
    };
}

export default Menu;