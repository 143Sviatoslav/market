import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './components/Main';
import Products from './components/Products';
import AddMoney1 from './components/AddMoney1';
import ExistProduct from './components/ExistProduct';
import { moneyContext } from './components/moneyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <moneyContext.Provider value={{check, setCheck}}> */}
    <moneyContext.Provider value={""}>
      <Main />
      <Products />
      <AddMoney1 />
      <ExistProduct />
    </moneyContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
