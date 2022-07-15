import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const LOGO = styled.h1`
  display: inline-block;
  line-height: 100px;
`;

const HeaderWrap = styled.div`
  height: 100px;
  margin: 50px 0px;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const CreateLink = styled(Link)`
  margin-left: 20px;
`;

const Row = styled.div``;

const Header = () => {
    return(
        <HeaderWrap>
            <Container>
                <Row>
                    <LOGO>KEVIN BLOG</LOGO>
                </Row>
            </Container>
        </HeaderWrap>
    )
}

export default Header;