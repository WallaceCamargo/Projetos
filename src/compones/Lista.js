import React from 'react';

const Lista = () => {
  const produtos = ['Notebook', 'Smartphone', 'Tablet'];
  const livros = [
    { nome: 'A Clash of Kings', ano: 1996 },
    { nome: 'A Game of Thrones', ano: 1999 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {produtos.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {livros
        .filter((livro) => livro.ano > 1998)
        .map((livro) => (
          <li>
            {livro.nome} | {livro.ano}
          </li>
        ))}
    </div>
  );
};

export default Lista;
