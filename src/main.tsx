import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import GlobalStyles from "./styles/global";
import { Provider } from "./context/provider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <App />
      <GlobalStyles/>
    </Provider>
  </React.StrictMode>,
)
