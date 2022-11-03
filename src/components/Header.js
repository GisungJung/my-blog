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


const Header = () => {
    return(
        <HeaderWrap>
            <Container>
                    <Link to='/#'><LOGO>DDANG BLOG</LOGO></Link>
            </Container>
        </HeaderWrap>
    )
}

export default Header;