import React, { Component } from 'react';
import '../../style/common.css';
import './Nav.scss';

class Nav extends Component {
    render() {
        return (
            <nav className="Nav">
                <ul class="link_list">
                    <li>
                        <a href="">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore_img"/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart_img"/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile_img"/>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;