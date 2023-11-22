import { useState } from 'react';
import './App.css';
import AppLogo from './assets/app-logo.png';
import CGLogo from './assets/open-ai.png';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // communicate with API...

  };

  return (
    <div className='wrapper'>
      <img src={AppLogo} className='app-logo' alt='app-logo' />
      <form onSubmit={handleSubmit}>
        <img src={CGLogo} className={ loading ? 'cg-logo loading' : 'cg-logo' } 
          alt='cg-logo' 
        />
        <input
          type='text'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder='Ask me anything... :)'
        />
        <button type='submit'>Ask</button>
      </form>
      <p className='response-area'>
        { loading ? 'loading...' : response }
      </p>
      <div className='footer'>~ webstyle press ~</div>
    </div>
  );
}

export default App;
