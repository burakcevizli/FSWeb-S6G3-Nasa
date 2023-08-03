import React, { useState } from 'react'; /* ADIM 0 */

export default function DateField() {
  const [inputDeğeri, setInputDeğeri] = useState("");

  const inputuDeğiştir = (evt) => {
    const { value } = evt.target;
    setInputDeğeri(value);
  };

  const reset = () => {
    setInputDeğeri("");
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: inputDeğeri.length > 10 ? "crimson" : "royalblue"
  };

  return (
    <div className='widget-input container'>
      <h2>Input</h2>
      <div id='output' style={stil}>
        {inputDeğeri.toUpperCase()}
      </div>
      <div>
        <input id='input' type='date' onChange={inputuDeğiştir} value={inputDeğeri} />
        <button id='resetInput' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

