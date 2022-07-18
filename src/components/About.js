import React from "react";
import Profile from "../imgs/profile.jpg"
import styled from "styled-components";
import Educate from "./aboutcomps/Educate";

const ProfileTag = styled.img`
   width : 100%;
`;

const ProfileDiv = styled.div`
    width : 26%;
    padding : 5px;
    text-align: center;
    position: absolute;
`;

const AboutDiv = styled.div`
    position: relative;
    margin-left : 30%;
`;
const SubTitle = styled.h2`
    margin-left : 10px;
`;

const About = () => {   
    return(
        <>
            <SubTitle>About</SubTitle>
            <ProfileDiv>
                <ProfileTag className="profile" src={Profile} />
            </ProfileDiv>
            <AboutDiv>
                <Educate/>
            </AboutDiv>
        </>
    )
}
export default About;