import React, { Component } from 'react';
import './style.css';
import marked from 'marked';

class Comment extends Component {
    rawMarkup() {
        let rawMarkup = marked(this.props.children.toString());
        return { _html: rawMarkup };
    }
    render() {
        <div className="comment">
            <h3>{this.props.author}</h3>
            <span dangerouslySetInnerHTML={ this.rawMarkup() } />
        </div>
    }
}

export default Comment;