import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuProvider } from './context/menuContext';
import { DropMenuProvider } from './context/DropMenuContext';
import { DropMenuProvider2 } from './context/DropMenuContext2';
import { CategoryProvider } from './context/Categories';
import { SearchProvider } from './context/searchContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoryProvider>
      <SearchProvider>
        <DropMenuProvider2>
          <DropMenuProvider>
            <MenuProvider>
              <App />
            </MenuProvider>
          </DropMenuProvider>
        </DropMenuProvider2> 
      </SearchProvider>
    </CategoryProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
