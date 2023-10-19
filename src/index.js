import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { UserContext } from "./services/UserContext/UserContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  const [state, setState] = useState({
    isAuth: false,
    userData: null,
    _id: null,
    savedMovies: []
  });
  return (
    <React.StrictMode>
      <UserContext.Provider value={{ state, setState }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext.Provider>
    </React.StrictMode>
  );
}

root.render(<Index />);

reportWebVitals();
