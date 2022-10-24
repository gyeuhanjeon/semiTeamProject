import { useState } from 'react';

function InputBirth() {
  const [birth, setBirth] = useState('');

  const onChangeBirth = e => { setBirth(e.target.value); };

  return(
    <div className='field-wrap'>
      <div className='input-field'>
        <span style={{display: 'inline-block', width: 150}}>생년월일</span>
        <input type="date" value={birth} onChange={onChangeBirth} />
      </div>
      
    </div>
  );
}

export default InputBirth;