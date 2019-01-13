import React, { Component } from 'react';
import styled from 'styled-components';


const StyledLink = styled.a `
    color:  #ffffff;
    font-size: 14px;
    font-weight: 300;
    line-height: 14px;
    padding-right:  25px;
    padding-top: 7px;
    padding-bottom: 7px;
    border-right: 1px dotted #fff;
    &:hover {
        color:  #8d8d8d;
        text-decoration: none;
    }
    &:last-child {
        border-right: none;
    }
    
`

class Link extends React.Component {
    render () {
        return (
            <StyledLink href={this.props.Link}>{this.props.text}</StyledLink>
        )
    }
}

export default Link;