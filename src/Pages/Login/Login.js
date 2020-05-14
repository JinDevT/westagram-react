import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/1600px-Instagram_logo.svg.png';
import './Login.scss';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="container">
                    <div className="inner">
                        <header className="header">
                            <h1>
                                <span className="header_tit">로고</span>
                                <Link to="/" className="page_move">
                                    <img src={logo} alt="logo"/>
                                </Link>
                            </h1>
                        </header>
                        <form className="form">
                            <div className="input_box">
                                <input id="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                            </div>
                            <div className="input_box">
                                <input id="password" type="password" placeholder="비밀번호"/>
                            </div>
                            <div className="button_box">
                                <button type="button" className="btn" disabled="disabled">
                                    <span>로그인</span>
                                </button>
                            </div>
                        </form>
                    
                        <div className="password_forget">
                            <Link to="/" className="page_move">
                                <span>비밀번호를 잊으셨나요?</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;