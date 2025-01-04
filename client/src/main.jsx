import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import reportWebVitals from './reportWebVitals'; // Corrected the import
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/Auth.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);

// reportWebVitals(); // Corrected the function name
