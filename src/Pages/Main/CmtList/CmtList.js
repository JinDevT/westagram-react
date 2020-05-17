import React, { Component } from 'react';
import './CmtList.scss';

class CmtList extends Component {
    static defaultProps = {
        userId : "kimjintae",
        inputComment : "댓글을 구현해보자"
    }

    handleRemove = () => {
        console.log("remove button")
        const { comments, onRemove } = this.props;
        onRemove(comments.id);
    }

    render() {
        const { userId, inputComment } = this.props.comments;
        
       
        return(
            <>
                <li className="CmtList">
                    <div className="comments_tit">
                        <span className="user_id">{userId}</span>
                        <span className="comment_contents">{inputComment}</span>
                    </div>
                    <div className="button_box">
                        <button type="button" onClick={this.handleRemove}>
                           x
                        </button>
                    </div>
                </li>
            </>
        );
    }
}

export default CmtList;                    