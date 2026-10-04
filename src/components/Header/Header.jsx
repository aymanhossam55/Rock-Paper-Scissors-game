import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Logo from "../../assets/logo.svg";

import "./header.css";

const Header = ({ player1count, player2count }) => {
    return (
        <Container className="header">
            <Row className="header-content align-items-center">
                <Col className="logo">
                    <img
                        src={Logo}
                        alt="Rock Paper Scissors"
                    />
                </Col>

                <Col xs="auto" className="score">
                    <span className="score-heading">
                        SCORE
                    </span>

                    <span className="score-count">
                        {player1count} - {player2count}
                    </span>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;