import React from 'react';

const Home = () => {
  const nav = (
    <nav>
      <ul>
        <li>
          <a href="#">produtos</a>
        </li>
        <li>
          <a href="#">contato</a>
        </li>
      </ul>
    </nav>
  );

  return (
    <div>
      <h1>HOME</h1>
      {nav}
    </div>
  );
};

export default Home;
