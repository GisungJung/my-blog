import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const LOGO = styled.h1`
  display: inline-block;
  margin-left: 10px;
`;

const HeaderWrap = styled.div`
  background-color : #eeeeee;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Row = styled.div``;

const Header = () => {
    return(
        <HeaderWrap>
            <Container>
                <Row>
                    <Link to='/'><LOGO>KEVIN BLOG</LOGO></Link>
                </Row>
            </Container>
        </HeaderWrap>
    )
}

export default Header;