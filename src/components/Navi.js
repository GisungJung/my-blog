import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`

const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
`

const NavItem = styled(NavLink)`
    width: 60px;
    margin-left: 10px;
    margin-top: 5px;
    display: flex;
    &:active {
        background-color: #5a6268;
    }
`

const Navi = () => {
    return(
        <Nav>
            <NavList>
                <NavItem to='/about'>About</NavItem>    
                <NavItem to='/portfolio'>Portfolio</NavItem>    
                <NavItem to='/contact'>Contact</NavItem>    
            </NavList>
            <Routes>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/portfolio" element={<Portfolio/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
            </Routes>
        </Nav>
    );
}

export default Navi;