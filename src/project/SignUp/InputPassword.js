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
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

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

export default InputPassword;