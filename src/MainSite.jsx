import { useState } from 'react';
import App from './App';
import QuoteApp from './Quote';
import TelefonbokApp from './Telefonbok';
import StatestikkApp from './Statestikk';


const MainSite = () => {
  const [currentPage, setCurrentPage] = useState('App');
  

  // Definer hvilke komponenter som tilhører hver side
  const pages = {
    TelefonbokApp: <TelefonbokApp />,
    QuoteApp: <QuoteApp />,
    App: <App />,
    StatestikkApp: <StatestikkApp />,
  };

  return (
    <div>
        
      <header style={{ display: 'flex', gap: '20px', padding: '10px', background: '#ddd', margin: "-10px"  }}>
      <button onClick={() => setCurrentPage('App')}>App</button>
        <button onClick={() => setCurrentPage('TelefonbokApp')}>Telefonbok</button>
        <button onClick={() => setCurrentPage('QuoteApp')}>Quotes</button>
        <button onClick={() => setCurrentPage('StatestikkApp')}>Statestikk</button>
      </header>
    <br />
      {/* Render den valgte siden, standard til 'quote' hvis ikke funnet */}
      {pages[currentPage] || <QuoteApp />}
    </div>
  );
};

export default MainSite;
