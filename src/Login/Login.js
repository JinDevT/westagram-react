import React, { Component } from 'react';
import logo from '../images/1600px-Instagram_logo.svg.png';
import '../style/reset.css';
import './Login.scss';
class Login extends Component {
    render() {
        return (
            <div class="Login">
                <div class="container">
                    <div class="inner">
                        <header class="header">
                            <h1>
                                <span class="header_tit">로고</span>
                                <a href="#" class="page_move">
                                    <img src={logo} alt="logo"/>
                                </a>
                            </h1>
                        </header>
                        <form class="form">
                            <div class="input_box">
                                <input id="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                            </div>
                            <div class="input_box">
                                <input id="password" type="password" placeholder="비밀번호"/>
                            </div>
                            <div class="button_box">
                                <button type="button" class="btn" disabled="disabled">
                                    <span>로그인</span>
                                </button>
                            </div>
                        </form>
                    
                        <div class="password_forget">
                            <a href="#" class="page_move">
                                <span>비밀번호를 잊으셨나요?</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;