import React, { Component } from 'react';
import profileImg from '../../images/profile-img.jpg';
import '../../style/common.css';
import './Feed.scss';

class Feed extends Component {
    render() {
        return (
            <>
                <li class="Feed">
                    <div class="feed_profile">
                        <div class="profile">
                            <img src={profileImg} alt="profile" class="profile_img" />
                            <p class="profile_id">아이디</p>
                        </div>
                        <div class="profile_add link_list">
                            <button type="button" class="state_btn">
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="" />
                            </button>
                        </div>
                    </div>
                    <div class="feed_box">
                        <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/94610049_230124178062421_322929445227861032_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=M1ZgPJB62boAX-12VGR&oh=ec1d7c93922878ab1f30cc09075ac8dc&oe=5ECF0669
                        " alt="feed_img" />
                    </div>
                    <div class="feed_info">
                        <div class="feed_state">
                            <ul class="link_list">
                                <li>
                                    <button type="button" class="state_btn">
                                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png
                                        " alt="like_img" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="state_btn">
                                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt="comment_img" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="state_btn">
                                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" alt="share_img" />
                                    </button>
                                </li>   
                            </ul>
                            <div class="link_list">
                                <button type="button" class="state_btn">
                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="bookmark_img"/>
                                </button>
                            </div>
                        </div>
                        <div class="feed_comments">
                            <div class="feed_likes comments_margin">
                                <div class="likes_user profile">
                                    <img src={profileImg} alt="profile" class="profile_img" />
                                </div>
                                <div class="comments_info">
                                    <p class="comments_tit">
                                        <span class="user_id">000</span>님 <span>외 <span class="likes_number">10명</span></span>이 좋아합니다.
                                    </p>
                                </div>
                            </div>
                            <div class="comment_list comments_margin">
                                <ul class="comments_info comment_list_ul">
                                    <li>
                                        <div class="comments_tit">
                                            <span class="user_id">아이디</span>
                                            <span class="comment_contents">쿠킹클래스</span>
                                        </div>
                                    </li>
                                </ul>
                                <div class="feed_time">
                                    <p class="time">4시30분</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <form class="comments_form">
                        <div class="input_box">
                            <input type="text" placeholder="댓글달기..." id="comment_input" />
                        </div>
                        <div class="button_box">
                            <button type="button" class="btn" disabled="disabled">
                                <span class="">게시</span>
                            </button>
                        </div>
                    </form>
                
                </li>
                
            </>
        );
    }
}

export default Feed;