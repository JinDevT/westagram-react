import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Feed from '../components/Feed/Feed';
import profileImg from '../images/profile-img.jpg';
import '../style/reset.css';
import '../style/common.css';
import './Main.scss';


class Main extends Component {
    render() {
        return (
            <div class="Main">
                <Header />
                <div class="main_box">
                    <div class="container">
                        <div class="contents_left">
                            <div class="inner">
                                <ul className="feeds_list">
                                    <Feed />
                                </ul>
                            </div>
                        </div>
               
                        <div class="contents_rigth">
                            <aside class="aside">
                                <div class="feed_profile aside_profile">
                                    <div class="profile">
                                        <img src={profileImg} alt="profile" class="profile_img" />
                                        <div className="profile_info">
                                            <p class="profile_id">아이디</p>
                                            <p class="profile_intro">자기소개</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="follow">
                                    <div class="follow_info follow_story">
                                        <div class="follow_title">
                                            <span class="text_tit">스토리</span>
                                            <a href="#">
                                                <span class="sub_tit">모두보기</span>
                                            </a>
                                        </div>
                                        <div class="follow_list_wrap feed_profile">
                                            <ul class="profile follow_list scroll">
                                                <li>
                                                    <img src={profileImg} alt="profile" class="profile_img" />
                                                    <div class="profile_info">
                                                        <p class="profile_id">아이디</p>
                                                        <p class="profile_intro">1시간 전</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={profileImg} alt="profile" class="profile_img" />
                                                    <div class="profile_info">
                                                        <p class="profile_id">아이디</p>
                                                        <p class="profile_intro">1시간 전</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={profileImg} alt="profile" class="profile_img" />
                                                    <div class="profile_info">
                                                        <p class="profile_id">아이디</p>
                                                        <p class="profile_intro">1시간 전</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={profileImg} alt="profile" class="profile_img" />
                                                    <div class="profile_info">
                                                        <p class="profile_id">아이디</p>
                                                        <p class="profile_intro">1시간 전</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="follow_info">
                                        <div class="follow_title">
                                            <span class="text_tit">회원님을 위한 추천</span>
                                            <a href="#">
                                                <span class="sub_tit">모두보기</span>
                                            </a>
                                        </div>
                                        <div class="follow_list_wrap feed_profile test">
                                            <ul class="profile follow_list">
                                                <li>
                                                    <img src="img/profile-img.jpg" alt="profile" class="profile_img" />
                                                    <div class="profile_info">
                                                        <p class="profile_id">아이디</p>
                                                        <p class="profile_intro">아아디 외 2명이 팔로우</p>
                                                    </div>
                                                    <div class="follow_btn">
                                                        <button type="button" class="btn">
                                                            <span>팔로우</span>
                                                        </button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="img/profile-img.jpg" alt="profile" class="profile_img" />
                                                    <div class="profile_info">
                                                        <p class="profile_id">아이디</p>
                                                        <p class="profile_intro">ABCDEFGHIJK 외 2명이 팔로우</p>
                                                    </div>
                                                    <div class="follow_btn">
                                                        <button type="button" class="btn">
                                                            <span>팔로우</span>
                                                        </button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="img/profile-img.jpg" alt="profile" class="profile_img" />
                                                    <div class="profile_info">
                                                        <p class="profile_id">아이디</p>
                                                        <p class="profile_intro">아아디 외 2명이 팔로우</p>
                                                    </div>
                                                    <div class="follow_btn">
                                                        <button type="button" class="btn">
                                                            <span>팔로우</span>
                                                        </button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                   
                            <footer class="footer">
                                <span>Copyright 2020. Kim ijn tae</span>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Main;