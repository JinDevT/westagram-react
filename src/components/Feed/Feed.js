import React, { Component } from 'react';
import profileImg from '../../images/profile-img.jpg';
import './Feed.scss';

class Feed extends Component {
    render() {
        return (
            <>
                <li className="Feed">
                    <div className="feed_profile">
                        <div className="profile">
                            <img src={profileImg} alt="profile" className="profile_img" />
                            <p className="profile_id">아이디</p>
                        </div>
                        <div className="profile_add link_list">
                            <button type="button" className="state_btn">
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="feed_box">
                        <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/94610049_230124178062421_322929445227861032_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=M1ZgPJB62boAX-12VGR&oh=ec1d7c93922878ab1f30cc09075ac8dc&oe=5ECF0669
                        " alt="feed_img" />
                    </div>
                    <div className="feed_info">
                        <div className="feed_state">
                            <ul className="link_list">
                                <li>
                                    <button type="button" className="state_btn">
                                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png
                                        " alt="like_img" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="state_btn">
                                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt="comment_img" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="state_btn">
                                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" alt="share_img" />
                                    </button>
                                </li>   
                            </ul>
                            <div className="link_list">
                                <button type="button" className="state_btn">
                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="bookmark_img"/>
                                </button>
                            </div>
                        </div>
                        <div className="feed_comments">
                            <div className="feed_likes comments_margin">
                                <div className="likes_user profile">
                                    <img src={profileImg} alt="profile" className="profile_img" />
                                </div>
                                <div className="comments_info">
                                    <p className="comments_tit">
                                        <span className="user_id">000</span>님 <span>외 <span className="likes_number">10명</span></span>이 좋아합니다.
                                    </p>
                                </div>
                            </div>
                            <div className="comment_list comments_margin">
                                <ul className="comments_info comment_list_ul">
                                    <li>
                                        <div className="comments_tit">
                                            <span className="user_id">아이디</span>
                                            <span className="comment_contents">쿠킹클래스</span>
                                        </div>
                                    </li>
                                </ul>
                                <div className="feed_time">
                                    <p className="time">4시30분</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <form className="comments_form">
                        <div className="input_box">
                            <input type="text" placeholder="댓글달기..." id="comment_input" />
                        </div>
                        <div className="button_box">
                            <button type="button" className="btn" disabled="disabled">
                                <span className="">게시</span>
                            </button>
                        </div>
                    </form>
                
                </li>
                
            </>
        );
    }
}

export default Feed;