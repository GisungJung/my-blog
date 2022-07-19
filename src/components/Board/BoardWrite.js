import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";

const Example = ({}) => {
    const editor = useRef(null);
    const [content, setContent] = useState("");
  
    const config = {
      readonly: false,
      placeholder: "내용을 입력하세요.",
      width: 1080
    };
  
    return (
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => {}}
      />
    );
  };

const BoardWrite = () => {
    return(
        <>
            <h2>글쓰기</h2>
            <div style={{width: "80%"}}>
                <div>
                    <span>제목 : </span>
                    <input style={{width: "1000px"}} type="text" placeholder="제목을 입력하세요"/>
                </div>
                <br/>
                <div>
                    <Example/>
                </div>
                <div>
                    <button>저장</button>
                    <button>초기화</button>
                </div>
            </div>
        </>
    );
}

export default BoardWrite;