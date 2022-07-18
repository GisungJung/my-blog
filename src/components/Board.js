import React from "react";
import styled from "styled-components";

const Table = styled.table`
    width: 100%;
    border: 1px solid #444444;
    border-collapse: collapse;
`;

const TableTr = styled.tr`
    border: 1px solid #444444;
`;

const TableTh = styled.th`
    border: 1px solid #444444;  
    background: #eeeeee;
    padding: 5px;
`;

const TableTd = styled.td`
    border: 1px solid #444444;
    padding: 5px;
`;

const BtnGrp = styled.div`
    text-align: right;
`;

const Button = {
    marginRight : "4px"
}
const Board = () => {
    return(
        <>
            <h2>Board</h2>
            <hr/>
            <BtnGrp>
                <button style={Button}>글쓰기</button>
                <button style={Button}>수정</button>
                <button style={Button}>삭제</button>
            </BtnGrp>
            <br/>
            <div>
                <Table>
                    <TableTr>
                        <TableTh>No</TableTh>
                        <TableTh>내용</TableTh>
                        <TableTh>작성자</TableTh>
                        <TableTh>작성시간</TableTh>
                    </TableTr>
                    <TableTr>
                        <TableTd>1</TableTd>
                        <TableTd>게시글 1입니다</TableTd>
                        <TableTd>동동이</TableTd>
                        <TableTd>2021-07-18</TableTd>
                    </TableTr>
                    <TableTr>
                        <TableTd>2</TableTd>
                        <TableTd>게시글 2입니다</TableTd>
                        <TableTd>길동이</TableTd>
                        <TableTd>2021-07-18</TableTd>
                    </TableTr>
                </Table>
            </div>

        </>
    );
}

export default Board;