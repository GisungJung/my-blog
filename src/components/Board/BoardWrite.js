import React, {useState, useRef, useEffect} from 'react';
import JoditEditor from "jodit-react";
import Axios from 'axios';

const Edit = ({}) => {
    const editor = useRef(null);
    const [boardContent, setBoardContent] = useState({
      subject: '',
      content: '',
      writer: ''
    })
  
    const [viewContent , setViewContent] = useState([]);

    useEffect(()=>{
      Axios.get('http://localhost:4000/board/insertBoard').then((response)=>{
        setViewContent(response.data);
      })
    },[viewContent])

    const SaveContent =()=>{
      Axios.post('http://localhost:4000/board/insertBoard', {
        subject: boardContent.subject,
        content: boardContent.content,
        writer: boardContent.writer
      }).then(()=>{
        alert('등록 완료!');
      })
    };

    const inputSubject = (e) => {
      setBoardContent(e.target.value);
    }
    const inputWriter = (e) => {
      setBoardContent(e.target.value);
    }

    const config = {
      readonly: false,
      placeholder: "내용을 입력하세요.",
      minHeight: 400,
    };

    const ResetContent = () => {
      console.log("초기화버튼");
      if (window.confirm("초기화가됩니다")) {
      } else {
        alert("취소합니다.");
      }
    };

    return (
      <>
        <div style={{width: "80%"}}>
          <span>제목 : </span>
          <input style={{width: "80%"}} 
                 type="text" 
                 placeholder="제목을 입력하세요" 
                 value={boardContent.subject}
                 onChange={inputSubject}
           />
        </div>
        <div style={{width: "80%"}}>
          <span>작성자 : </span>
          <input style={{width: "80%"}} 
                 type="text" 
                 value={boardContent.writer}
                 onChange={inputWriter}
           />
        </div>
        <br/>
        <JoditEditor
          ref={editor}
          value={boardContent.content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={newContent => setBoardContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={newContent => {}}
        />
        <div >
          <button onClick={SaveContent}>저장</button>
          <button onClick={ResetContent}>초기화</button>
        </div>
      </>
    );
  };

const BoardWrite = () => {
    return(
        <>
            <h2>글쓰기</h2>
            <div style={{width: "100%"}}>
                <div style={{width: "80%"}}>
                    <Edit/>
                </div>
            </div>
        </>
    );
}

export default BoardWrite;