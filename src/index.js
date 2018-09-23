import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bootstrap from "bootstrap/dist/css/bootstrap.css";

const moutRoot = document.getElementById('root');
const render = ( Components = App) =>{
  ReactDOM.render(<Components />, document.getElementById('root'));
}

render()

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
