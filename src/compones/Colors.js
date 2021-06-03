import React, { useState } from 'react';

const Colors = () => {
  const [color, setColor] = useState('red');
  const colors = ['blue', 'red', 'tomato', 'green'];

  const style = {
    backgroundColor: color,
    width: '200px',
    height: '200px',
  };
  const btn = {
    margin: '1em',
    padding: '10px 15px',
  };
  return (
    <div>
      <div style={style}></div>
      {colors.map((color) => (
        <button style={btn} key={color} onClick={() => setColor(color)}>
          {color}
        </button>
      ))}
    </div>
  );
};
export default Colors;
