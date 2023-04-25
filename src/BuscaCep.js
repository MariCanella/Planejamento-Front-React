import React, { useState } from 'react';
import axios from 'axios';
import './BuscaCep.css';

function BuscaCep() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => setEndereco(response.data))
      .catch((error) => console.error(error));
  }

  return (
    <div className="BuscaCep">
      <form onSubmit={handleSubmit}>
        <label htmlFor="cep">
          CEP:
          <input
            type="text"
            id="cep"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
        </label>
        <button type="submit">Buscar</button>
      </form>
      {endereco && (
        <div className="endereco">
          <p><strong>CEP:</strong> {endereco.cep}</p>
          <p><strong>Rua:</strong> {endereco.logradouro}</p>
          <p><strong>Bairro:</strong> {endereco.bairro}</p>
          <p><strong>Cidade:</strong> {endereco.localidade}</p>
          <p><strong>Estado:</strong> {endereco.uf}</p>
        </div>
      )}
    </div>
  );
}

export default BuscaCep;
