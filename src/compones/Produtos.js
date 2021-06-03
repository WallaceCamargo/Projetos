import React from 'react';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto?_limit=8')
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  return (
    <div className="produtos">
      {produtos.map((produto) => (
        <div className="produtos-item" key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].alt} />
          <h1>{produto.nome}</h1>
        </div>
      ))}
    </div>
  );
};

export default Produtos;
