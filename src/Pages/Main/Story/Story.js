import React, { Component } from 'react';
import StoryList from '../StoryList/StoryList';
import './Story.scss';


class Story extends Component {
    render() {
        return (
            <div className="Story follow_info">
                <div className="follow_title">
                    <span className="text_tit">스토리</span>
                    <a href="#">
                        <span className="sub_tit">모두보기</span>
                    </a>
                </div>
                <div className="follow_list_wrap feed_profile">
                    <ul className="profile follow_list scroll">
                        <StoryList />
                        <StoryList />
                        <StoryList />
                        <StoryList />
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default Story;