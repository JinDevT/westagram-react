import React, { Component } from 'react';

class CmtList extends Component {
    render() {
        return(
            <>
                <li>
                    <div className="comments_tit">
                        <span className="user_id">{this.props.userId}</span>
                        <span className="comment_contents">{this.props.inputComment}</span>
                    </div>
                </li>
            </>
        );
    }
}

export default CmtList;                    