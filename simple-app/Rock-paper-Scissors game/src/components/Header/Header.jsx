import React, { useState } from 'react'
import "./header.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../assets/logo.svg'

const Header = ({ player1count, player2count }) => {

  return (
    <>
        <Container className='header'>
          <Row className='header-content'>
            <Col className='logo'>
              <img src={Logo} alt="" />
            </Col>
            <Col sm={2} className='score'>
                <Row className='score-heading'>Score</Row>
                <Row className='score-count'>{player1count}-{player2count}</Row>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Header