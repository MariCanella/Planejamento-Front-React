import axios from 'axios';
import { useState } from 'react';
import './styles.css';

function App() {
  const [cep1, setCep1] = useState('');
  const [address1, setAddress1] = useState('');
  const [cep2, setCep2] = useState('');
  const [address2, setAddress2] = useState('');
  const [cep3, setCep3] = useState('');
  const [address3, setAddress3] = useState('');

  async function handleSearch1() {
    const response = await axios.get(`https://viacep.com.br/ws/${cep1}/json/`);
    setAddress1(response.data.logradouro);
  }

  async function handleSearch2() {
    const response = await axios.get(`https://viacep.com.br/ws/${cep2}/json/`);
    setAddress2(response.data.logradouro);
  }

  async function handleSearch3() {
    const response = await axios.get(`https://viacep.com.br/ws/${cep3}/json/`);
    setAddress3(response.data.logradouro);
  }

  return (
    <div className="container-wrapper"> 
      <div className="container">
        <h1 className="title">Mariana Vinha Canella</h1>
        <div className="info">
          <h2>Sobre você:</h2>
          <p>Me chamo Mariana Vinha, tenho 18 anos e moro no ABC</p>
        </div>
        <div className="info">
          <h2>Formação:</h2>
          <p>Formada no ensino médio integrado informática pra internet</p>
          <p>Cursando sistemas pra internet</p>
        </div>
        <div className="info">
          <h2>Experiências:</h2>
          <p>6 meses de estágio em back end no Itaú</p>
        </div>
        <div className="info">
          <h2>Hobbies:</h2>
          <p>Gosto muito de ouvir música, em meu tempo livre danço e jogo valorant</p>
        </div>
        <div className="info">
          <h2>CEP:</h2>
          <div className="cep-search">
            <input type="text" placeholder="Digite o CEP" value={cep1} onChange={e => setCep1(e.target.value)} />
            <button onClick={handleSearch1}>Buscar</button>
          </div>
          <p>Endereço: {address1}</p>
        </div>
      </div>
      <div className="container">
        <h1 className="title">Matheus Dom Fei Chen</h1>
        <div className="info">
          <h2>Sobre você:</h2>
          <p>Me chamo Matheus, tenho 22 anos e moro em São Paulo - SP</p>
        </div>
        <div className="info">
          <h2>Formação:</h2>
          <p>Formado no ensino médio Cursando sistemas pra internet</p>
        </div>
        <div className="info">
          <h2>Experiências:</h2>
          <p>Inside sales na PPT GO</p>
        </div>
        <div className="info">
          <h2>Hobbies:</h2>
          <p>Gosto de carros, tenis e jogos</p>
        </div>
        <div className="info">
          <h2>CEP:</h2>
          <div className="cep-search">
            <input type="text" placeholder="Digite o CEP" value={cep2} onChange={e => setCep2(e.target.value)} />
            <button onClick={handleSearch2}>Buscar</button>
          </div>
          <p>Endereço: {address2}</p>
        </div>
      </div>
      <div className="container">
        <h1 className="title">Paulo Gomes</h1>
        <div className="info">
          <h2>Sobre você:</h2>
          <p>Me chamo Paulo Gomes, tenho 25 anos e moro na cidade de Guarujá - SP</p>
        </div>
        <div className="info">
          <h2>Formação:</h2>
          <p>Cursando "Sistemas para Internet" com previsão de graduação em DEZ/23 na Faculdade de Informática e Administração Paulista - FIAP</p>
        </div>
        <div className="info">
          <h2>Experiências:</h2>
          <p>Trabalho como QA na BLABLACAR, uma empresa de transporte transmodal</p>
        </div>
        <div className="info">
          <h2>Hobbies:</h2>
          <p>Sou uma pessoa que não tenho muitos hobbies, meus passatempos ficam entre jogar Valorant, academia e jogar basquete</p>
        </div>
        <div className="info">
          <h2>CEP:</h2>
          <div className="cep-search">
            <input type="text" placeholder="Digite o CEP" value={cep3} onChange={e => setCep3(e.target.value)} />
            <button onClick={handleSearch3}>Buscar</button>
          </div>
          <p>Endereço: {address3}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
