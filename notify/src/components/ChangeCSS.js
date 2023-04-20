import React, { useState } from 'react';

function ChangeCSS() {
  const [color, setColor] = useState('red');
  const [fontSize, setFontSize] = useState('16px');

  const handleClick = () => {
    setColor('blue');
    setFontSize('20px');
  }

  return (
    <div style={{ color: color, fontSize: fontSize }}>
      <p>Hello, world!</p>
      <button onClick={handleClick}>Change CSS</button>
    </div>
  );
}

export default ChangeCSS;