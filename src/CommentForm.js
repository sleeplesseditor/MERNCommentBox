import React, { Component } from 'react';
import './style.css';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { author: '', text: '' };
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit(this);
    }
    handleAuthorChange(e) {
        this.setState({ author: e.target.value });
    }
    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        let author = this.state.author.trim();
        let text = this.state.text.trim();
        if (!text || !author ) {
            return;
        }
        this.props.onCommentSubmit({ author, text });
        this.setState({ author: '', text: '' });
    }

    render() {
        return(
            <form className="commentForm" onSubmit={ this.handleSubmit }>
                <input 
                    type='text'
                    placeholder='Your name...'
                    className="formAuthor"
                    value={ this.state.author }
                    onChange={ this.handleAuthorChange }
                />
                <input 
                    type="text"
                    placeholder="Say something..."
                    className="commentFormText"
                    value={ this.state.text }
                    onChange={ this.handleTextChange }
                />
                <input 
                    type="submit"
                    className="commentFormPost"
                    value="Post"
                />
            </form>
        )
    }
}

export default CommentForm;