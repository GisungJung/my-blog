import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Board from "../components/Board"

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`

const NavList = styled.ul`
    width: 100%;
    display: flex;
`

const NavItem = styled(NavLink)`
    margin-left: 20px;
    display: flex;
    :active, :hover  {
        background: red;
    };
`
const Navi = () => {
    return(
        <Nav>
            <NavList>
                <NavItem to='/about'>About</NavItem>    
                <NavItem to='/board'>Board</NavItem>    
                <NavItem to='/portfolio'>Portfolio</NavItem>    
                <NavItem to='/contact'>Contact</NavItem>    
            </NavList>
            <Routes>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/board" element={<Board/>}></Route>
                <Route path="/portfolio" element={<Portfolio/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
            </Routes>
        </Nav>
    );
}

export default Navi;