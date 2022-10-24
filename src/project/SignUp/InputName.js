import { useState } from 'react';
import styled from 'styled-components';

const Msg = styled.div`
  color: red;
  font-size: .8em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;


function InputName() {
  const [name, setName] = useState('');
  const [showReqName, setShowReqName] = useState(false);
  const onChangeName = e => { setName(e.target.value); };
  const req_name = "이름을 정확히 입력하세요."

  const input_Check_Name = () => {
    if(name === '') {
      setShowReqName(true); // 이름을 정확히 입력하세요.
    } else {
      setShowReqName(false);	// 이름을 정확히 입력하세요.
    }
  }

  return (
    <div className='field-wrap'>
      <div className='input-field'>
        <span style={{display: 'inline-block', width: 150}}>이름</span>
        <input type="text" value={name} onChange={onChangeName} onBlur={input_Check_Name} required/><br />
      </div>
      <Msg>
        {showReqName && req_name}
      </Msg>
    </div>
  );
}

export default InputName;