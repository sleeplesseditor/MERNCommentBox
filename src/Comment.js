import React, { Component } from 'react';
import './style.css';
import marked from 'marked';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state={
            toBeUpdated: false, 
            author: '',
            text: ''
        };
    
        this.deleteComment = this.deleteComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
    }

    updateComment(e) {
        e.preventDefault();
        this.setState({
            toBeUpdated: !this.state.toBeUpdated
        });
    }

    handleCommentUpdate(e) {
        e.preventdefault();
        let id = this.props.uniqueID;
        let author = (this.state.author) ? this.state.author : null;
        let text = (this.state.text) ? this.state.text : null;
        let comment = { author, text };
        this.props.onCommentUpdate(id, comment);
        this.setState({
            toBeUpdated: !this.state.toBeUpdated,
            author: '',
            text: ''
        })
    }

    deleteComment(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        this.props.onCommentDelete(id);
        console.log('oops deleted');
    }

    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }

    handleAuthorChange(e) {
        this.setState({ author: e.target.value });
    }

    rawMarkup() {
        let rawMarkup = marked(this.props.children.toString());
        return { _html: rawMarkup };
    }
    render() {
        return (
        <div className="comment">
            <h3>{this.props.author}</h3>
            <span dangerouslySetInnerHTML={ this.rawMarkup() } />
            <a className="updateLink" href='#' onClick={this.updateComment}>Update</a>
            <a className="deleteLink" href='#' onClick={this.deleteComment}>Delete</a>
            { (this.state.toBeUpdated) ? (
                <form onSubmit={ this.handleCommentUpdate }>
                <input type="text" 
                    placeholder="Update name..." 
                    className="commentFormAuthor" 
                    value={ this.state.author } 
                    onChange={ this.handleAuthorChange } 
                />
                <input type="text" 
                    placeholder="Update your comment..."
                    className="commentFormText"
                    value={ this.state.text }
                    onChange={ this.handleTextChange }
                />
                <input type="submit" 
                    className="commentFormPost"
                    value="update"
                />
                </form>)
            : null}
        </div>
        ) 
    }
}

export default Comment;