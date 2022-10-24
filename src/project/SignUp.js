import {useState} from 'react';
import styled from 'styled-components';

// 정규식 조건
const regexId = /^\w{8,20}$/;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
// const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
// 뒤에 도메인 선택박스
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;


const Msg = styled.div`
  color: red;
  font-size: .8em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const memberObj = {
  isName: "",
  isId: "",
  isPassword: "",
  isPasswordCheck: "",
};


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

  memberObj.isName = name;

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

  memberObj.isId = id;

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
  
function InputPassword() {
  const [password, setPassword] = useState('');
  const [showGuidePassword, setShowGuidePassword] = useState(false);
  const [showAcceptPassword, setShowAcceptPassword] = useState(false);
  const guide_password = "영문/숫자/특수문자 2가지 이상 조합 (8~20자)"
  const accept_password = "사용 가능한 비밀번호입니다."

  let [password_check, setPassword_check] = useState('');
  const [showErrorPasswordCheck, setShowErrorPasswordCheck] = useState(false);
  const [showAcceptPasswordCheck, setShowAcceptPasswordCheck] = useState(false);
  const error_password_check = "비밀번호가 일치하지 않습니다."
  const accept_password_check = "비밀번호가 일치합니다."

  const onChangePassword = e => { 
    setPassword(e.target.value);
    let temp_password = e.target.value;

    if(regexPw.test(temp_password)) {
      setShowAcceptPassword(true); // 사용 가능한 비밀번호입니다.
      setShowGuidePassword(false); // 영문/숫자/특수문자 2가지 이상 조합 (8~20자)
    } else {
      setShowAcceptPassword(false); // 사용 가능한 비밀번호입니다.
      setShowGuidePassword(true); // 영문/숫자/특수문자 2가지 이상 조합 (8~20자)
    }

    if (password_check == '') console.log(password_check);
    else if(password_check !== '' && (temp_password !== '' && temp_password === password_check)) {
      setShowAcceptPasswordCheck(true); // 비밀번호가 일치합니다.
      setShowErrorPasswordCheck(false); // 비밀번호가 일치하지 않습니다.
    } else {
      setShowErrorPasswordCheck(true); // 비밀번호가 일치하지 않습니다.
      setShowAcceptPasswordCheck(false); // 비밀번호가 일치합니다.
    }
  };

  const onClickPassword = () => { 
    if (regexPw.test(password)) {
      setShowAcceptPassword(true); // 사용 가능한 비밀번호입니다.
      setShowGuidePassword(false); // 영문/숫자/특수문자 2가지 이상 조합 (8~20자)
    } else {
      setShowGuidePassword(true); // 영문/숫자/특수문자 2가지 이상 조합 (8~20자)
      setShowAcceptPassword(false); // 사용 가능한 비밀번호입니다.
    }
  };

  const onBlurpassword = () => {
    if(password === '') alert('비밀번호를 입력하세요');
  };

  const onChangePassword_check = e => { 
    setPassword_check(e.target.value);
    const temp_password_check = e.target.value;

    if(password == '') {
      alert('비밀번호를 먼저 입력하세요.');
      setPassword_check('');
      showErrorPasswordCheck(false);
    }

    if(password !== '' && !regexPw.test(password)) {
      alert('비밀번호를 확인하세요.');
    } else if (password === temp_password_check) {
      setShowAcceptPasswordCheck(true); // 비밀번호가 일치합니다.
      setShowErrorPasswordCheck(false); // 비밀번호가 일치하지 않습니다.
    } else {
      setShowErrorPasswordCheck(true); // 비밀번호가 일치하지 않습니다.
      setShowAcceptPasswordCheck(false); // 비밀번호가 일치합니다.
    }
  };

  const onClickPassword_check = () => { 
    if(password == '') alert('비밀번호를 먼저 입력하세요.');
    else if (!regexPw.test(password)) alert('비밀번호를 확인하세요.');
  };

  const onBlurPassword_check = () => {
    if(regexPw.test(password) && password_check === '') {
      alert('비밀번호 확인에 입력하세요.');
      setShowErrorPasswordCheck(true); // 비밀번호가 일치하지 않습니다.
    }
  };

  memberObj.isPassword = password;
  memberObj.isPasswordCheck = password_check;

  return(
    <div className='field-wrap'>
      <div className='input-field'>
        <span style={{display: 'inline-block', width: 150}}>비밀번호</span>
        <input type="password" value={password} onChange={onChangePassword} onClick={onClickPassword} onBlur={onBlurpassword} />
      </div>
      <Msg>
        {showGuidePassword && guide_password}
        {showAcceptPassword && accept_password}
      </Msg>

        <span style={{display: 'inline-block', width: 150}}>비밀번호 확인</span>
        <input type="password" value={password_check} onChange={onChangePassword_check} onClick={onClickPassword_check} onBlur={onBlurPassword_check}/>
      <Msg>
        {showErrorPasswordCheck && error_password_check}
        {showAcceptPasswordCheck && accept_password_check}
      </Msg>
    </div>
  );
}

function onClickButton() {
  if(memberObj.isName && memberObj.isId && memberObj.isPassword) {
    window.location.replace("/");
  } else alert('입력된 값을 확인하세요.');
}

function SignUp() {

  return (
    <div>
      <InputName></InputName>
      <InputId></InputId>
      <InputPassword></InputPassword>
      <button type="submit" onClick={onClickButton}>회원가입</button>
    </div>
  );
}

export default SignUp;