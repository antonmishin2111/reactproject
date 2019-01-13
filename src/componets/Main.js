import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';


const Repear = styled.div `
    color:  #ffffff;
    font-size: 40px;
    font-weight: 700;
    light-heght: 40px;
    span {
        display: block;
        font-size: 24px;/* Приближение из-за подстановки шрифтов */
        font-weight: 700;        
    }
`
const LigthText = styled.div `
    color:  #ffffff;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    margin-top: 54px;
`

const CallBtn = styled.button `
    margin-top: 34px;
    border-radius: 32px;
    background-color:  #ffa14b;
    border: none;
    padding: 22px 40px;
    color:  #ffffff;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;    
`

class Main extends React.Component {
    render () {
        return (
            <Row>
                <Col lg={5}>
                    <Repear>Качественный ремонт
                        <span>iphone за 35 минут и гарантия 1 год</span>
                    </Repear>
                    <LigthText>Оставьте заявку на бесплатную диагностику без очереди, и получите защитное стекло,
                        стоимостью 1000 рублей, с установкой в подарок!
                    </LigthText>
                    <CallBtn>Отправить заявку!</CallBtn>
                </Col>
                <Col lg={6} lgOffset={1}>
                    <div>привет</div>
                </Col>
            </Row>
        )
    }
}

export default Main;
