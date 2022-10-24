import { useState } from 'react';
import styled from 'styled-components';


const Msg = styled.div`
  color: red;
  font-size: .8em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// 정규식 조건
const regexId = /^\w{8,20}$/;

function InputId() {
  const [id, setId] = useState('');
  const [showReqId, setShowReqId] = useState(false);
  const [showGuideId, setShowGuideId] = useState(false);
  const req_id = "아이디를 입력하세요."
  const guide_id = "아이디를 올바르게 입력해주세요."
  const onChangeId = e => { setId(e.target.value); };
  
  


  const input_Check_Id = () => {
    if(id === '') {
      setShowReqId(true); // 아이디를 입력하세요.
    } else if (!regexId.test(id)) {
      setShowGuideId(true); // 아이디를 올바르게 입력해주세요.
      setShowReqId(false); // 아이디를 입력하세요.
    }
    else {
      setShowGuideId(false); // 아이디를 올바르게 입력해주세요.
      setShowReqId(false); // 아이디를 입력하세요.
    }
  };

  return(
    <div className='field-wrap'>
      <div className='input-field'>
        <span style={{display: 'inline-block', width: 150}}>아이디</span>
        <input type="text" value={id} onChange={onChangeId} onBlur={input_Check_Id}/>
      </div>
      <Msg>
        {showReqId && req_id}
        {showGuideId && guide_id}
      </Msg>
      
    </div>
  );
}

export default InputId;