import './App.css'

import image from './assets/virtual-reality-animate.svg';

function App() {
  

  return (
    <div className="App">
      <img src={image} alt="Image" />
      <form>
        <h1>Faça seu cadastro</h1>
        <input type="text" name="nome" id="nome" placeholder='Insira seu nome' />
        <input type="email" name="email" id="email" placeholder='Insira seu email' />
        <input type="password" name="password" id="password" placeholder='Insira sua senha' />
        <input type="password" name="password" id="password" placeholder='Confirme sua senha' />
        <button>Entrar</button>
      </form>
    </div>
  )
}

export default App
