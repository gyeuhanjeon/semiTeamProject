import { useState,useCallback } from 'react';
import styled from 'styled-components';
import InputName from './SignUp/InputName';
import InputId from './SignUp/InputId';
import InputPassword from './SignUp/InputPassword';
import InputBirth from './SignUp/InputBirth';
import InputSex from './SignUp/InputSex';
import App2 from './Addr2';

// 정규식 조건
const regexId = /^\w{8,20}$/;

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
  isBirth: ""
};

function SignUp() {
  const onSubmit = async () => {
    memberObj.id = id;  // useState 를 통해서 만들어진 값을 객체에 넣음. 
    memberObj.pwd = pwd;  // useState 를 통해서 만들어진 값을 객체에 넣음. 
    memberObj.name = name;  // useState 를 통해서 만들어진 값을 객체에 넣음. 
    memberObj.addr = addr;  // useState 를 통해서 만들어진 값을 객체에 넣음. 
    memberObj.mail = mail;  // useState 를 통해서 만들어진 값을 객체에 넣음. 
    memberObj.phone = phone; }

  return (
    <div>
      <InputName></InputName>
      <InputId></InputId>
      <InputPassword></InputPassword>
      <InputBirth></InputBirth>
      <InputSex></InputSex>
      <App2></App2>
      <button type="submit">회원가입</button>
    </div>
  );
}

export default SignUp;