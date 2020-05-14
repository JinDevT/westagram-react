import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './styles/reset.scss';
import './styles/common.scss'



ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
// render 함수 첫번 째 인자는 처음 보여지고 싶은 컴포넌트
// 어디에 보여주고 싶은지에 대한 위치가 들어감.
