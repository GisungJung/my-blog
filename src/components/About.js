import React from "react";
import Profile from "../imgs/profile.jpg"
import styled from "styled-components";

const ProfileTag = styled.img`
   width : 350px;
   
`;

const ProfileDiv = styled.div`
    width : 26%;
    padding : 5px;
    text-align: center;
    position: absolute;
`;

const AboutDiv = styled.div`
    position: relative;
    display: inline-block;
    margin-left : 30%;
`;
const SubTitle = styled.h2`
    margin-left : 20px;
`;

const About = () => {
    return(
        <>
            <SubTitle>About</SubTitle>
            <ProfileDiv>
                <ProfileTag className="profile" src={Profile} />
            </ProfileDiv>
            <AboutDiv>
                <h3>개발자 : 동동이</h3>
                <p>개발이 즐거워요!</p>
            </AboutDiv>
        </>
    )
}
export default About;