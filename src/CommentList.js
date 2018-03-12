import React, { Component } from 'react';
import Comment from './Comment';
import './style.css';

class CommentList extends Component {
    render() {
        let commentNodes = this.props.data.map(comment => {
            return (
                <Comment author={ comment.author }
                uniqueID={ comment['_id']}
                onCommentDelete={ this.props.onCommentDelete }
                onCommentUpdate={ this.props.onCommentUpdate } 
                key={ comment['_id'] }>
                    { comment.text }
                </Comment>
            )
        })
    return (
        <div className="commentList">
            { commentNodes }
        </div>
    )
    }
}

export default CommentList;