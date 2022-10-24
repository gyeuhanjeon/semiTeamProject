import {useState} from 'react';
// import styled from 'styled-components';

// 정규식 조건
const regexId = /^\w{8,20}$/;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

function InputName() {
    const [name, setName] = useState('');
    const [showReqName, setShowReqName] = useState(false);
    const onChangeName = e => { setName(e.target.value); };
    const req_name = "이름을 정확히 입력하세요."
  
    const input_Check_Name = () => {
      if(name === '') {
        alert('이름을 입력하세요.');
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
        <div>
          {showReqName && req_name}
        </div>
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
    alert('아이디를 입력하세요.')
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
    <div>
        {showReqId && req_id}
        {showGuideId && guide_id}
    </div>
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
      }
  
      if(password !== '' && !regexPw.test(password)) {
        alert('비밀번호를 확인하세요.');
        setPassword_check('');
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
  
    return(
      <div className='field-wrap'>
        <div className='input-field'>
          <span style={{display: 'inline-block', width: 150}}>비밀번호</span>
          <input type="password" value={password} onChange={onChangePassword} onClick={onClickPassword} onBlur={onBlurpassword} />
        </div>
        <div>
          {showGuidePassword && guide_password}
          {showAcceptPassword && accept_password}
        </div>
  
          <span style={{display: 'inline-block', width: 150}}>비밀번호 확인</span>
          <input type="password" value={password_check} onChange={onChangePassword_check} onClick={onClickPassword_check} onBlur={onBlurPassword_check}/>
        <div>
          {showErrorPasswordCheck && error_password_check}
          {showAcceptPasswordCheck && accept_password_check}
        </div>
      </div>
    );
}

// function onClickButton() {
//     if(memberObj.isName && memberObj.isId && memberObj.isPassword) {
//       window.location.replace("/MyPage");
//     } else alert('입력된 값을 확인하세요.');
// }

function SignUp() {

    return(
        <div>
            <InputName></InputName>
            <InputId></InputId>
            <InputPassword></InputPassword>
            <button type="submit">회원가입</button>
        </div>
    );
}
export default SignUp;