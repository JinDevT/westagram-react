import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import logo from '../../images/1600px-Instagram_logo.svg.png';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header class="Header">
                <div class="header_wrap">
                    <div class="inner">
                        <h1 class="logo">
                            <span>로고</span>
                            <a href="login.html">
                                <img src={logo} alt="main_logo" /> 
                            </a>
                        </h1>
                        <div class="input_box">
                            <input type="text" placeholder="검색" id="search" />
                        </div>
                        <Nav />
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;