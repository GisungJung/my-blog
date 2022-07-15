import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const HomeWrap = styled.div``;
const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`;
const Row = styled.div``;
const Postli = styled.li`
    padding: 5px;
    border-bottom: 1px solid black;
`;
const Home = () => {
    return(
        <HomeWrap>
            <Container>
                <Row>
                    <ul>
                        <Link to=''><Postli>첫번째글</Postli></Link>    
                        <Link to=''><Postli>두번째글</Postli></Link>    
                        <Link to=''><Postli>세번째글</Postli></Link>    
                    </ul>                    
                </Row>
            </Container>
        </HomeWrap>
    );
}

export default Home;