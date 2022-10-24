import { useState, useCallback } from 'react';

function InputSex() {
  const [x, setX] = useState([]);
  // const [errorRadio, setErrorRadio] = useState('');
  const onChangeRadioButton = useCallback(e => {
    const xCurrent = e.target.value;
    setX(xCurrent);
  });

  return(
    <div>
      <label className="label1">
        <input

          className="radio2"
          type="radio"
          value="1"
          checked={x === "1"}
          onChange={onChangeRadioButton}

        />
        남자
      </label>
      <label className="label2">
        <input
          className="radio3"
          type="radio"
          value="2"
          checked={x === "2"}
          onChange={onChangeRadioButton}
        />
        여자
      </label>
    </div>
  );
}

export default InputSex;