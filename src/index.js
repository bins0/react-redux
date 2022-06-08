import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools}  from "redux-devtools-extension";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
//1.store로 리덕스사용사게 아래 store ={store}로 사용해줌
const store = createStore(rootReducer,composeWithDevTools())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
