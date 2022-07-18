import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-left : 10px;
`;

const Contact = () => {
    return(
        <Container>
            <div>
                <h2>Contact</h2>
                <p>tel : +82-10-1111-1111</p>
                <p>E-mail : jgs5027@naver.com</p>
            </div> 
            <br/>
            <div>
                <p style={{fontWeight:"bold"}}>SEND E-MAIL</p>
                <div>
                    <span>보내는 사람 : </span>
                    <input type="text" 
                           placeholder="E-MAIL ID를 입력하세요"
                           style={{width: "295px"}}       
                    />
                </div>
                <div style={{width: "100%"}}>
                    <div>
                        <span>내용 : </span>
                    </div>
                    <div>
                        <textarea 
                        style={{minHeight: "150px",
                                width : "400px"
                            }} 
                    />
                    </div>
                    <div className="btnGrp" style={{marginLeft: "295px"}}>
                        <button>전송</button>
                        &nbsp;&nbsp;
                        <button>초기화</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Contact;