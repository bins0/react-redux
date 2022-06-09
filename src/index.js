import React from 'react';
import { createStore } from "redux";//줄 더 좋언가사용하라고
import { Provider } from "react-redux";
//리덕스 값을 확인하기위한 dev툴 - 크롭확장앱도 설치해야됨 
import { composeWithDevTools}  from "redux-devtools-extension";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
//1.store로 리덕스사용사게 아래 store ={store}로 사용해줌
const store = createStore(rootReducer,composeWithDevTools())//스토어에 dev툴연결
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
