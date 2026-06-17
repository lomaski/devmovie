import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes.jsx";
import GlobalStyle from './styled/globalStyles.js'; // Default import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle /> {/* Use as component */}
      <Routes />
    </BrowserRouter>
  </StrictMode>
);