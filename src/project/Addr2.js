import { useState } from "react";
import hangjungdong from "./hangjungdong";

export default function App2() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [setVal3] = useState("");
  const { sido, sigugun, dong } = hangjungdong;
  return (
    <div>
      <select onChange={(e) => setVal1(e.target.value)}>
        <option value="">선택</option>
        {sido.map((el) => (
          <option key={el.sido} value={el.sido}>
            {el.codeNm}
          </option>
        ))}
      </select>
      <select onChange={(e) => setVal2(e.target.value)}>
        <option value="">선택</option>
        {sigugun
          .filter((el) => el.sido === val1)
          .map((el) => (
            <option key={el.sigugun} value={el.sigugun}>
              {el.codeNm}
            </option>
          ))}
      </select>
      <select onChange={(e) => setVal3(e.target.value)}>
        <option value="">선택</option>
        {dong
          .filter((el) => el.sido === val1 && el.sigugun === val2)
          .map((el) => (
            <option key={el.dong} value={el.dong}>
              {el.codeNm}
            </option>
          ))}
      </select>
    </div>
  );
}