import React, { Component } from 'react';
import Feed from '../../Main/Feed/Feed';
import './ContentLeft.scss';

class ContentLeft extends Component {
    render() {
        return (
            <div className="ContentLeft">
                <div className="inner">
                    <ul className="feeds_list">
                        <Feed />
                    </ul>
                </div>
            </div>
        );
    }
};

export default ContentLeft;