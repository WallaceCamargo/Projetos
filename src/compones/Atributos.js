import React from 'react';

const Atributos = () => {
  const title = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'monospace',
  };

  const abre = 8;
  const fecha = 18;
  const agora = new Date().getHours();

  const [cont, setCont] = React.useState(0);
  const handleclick = () => {
    setCont(cont + 1);
  };

  return (
    <div>
      <h2 style={title}>Titulo</h2>
      <p>{abre < agora < fecha ? 'aberto' : 'fechado'}</p>

      <button onClick={handleclick}>Clique aqui : {cont}</button>
    </div>
  );
};

export default Atributos;
