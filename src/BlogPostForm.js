import React, { Component } from 'react';

class BlogPostForm extends Component {
	state = {
		title: '',
		content: '',
		tags: ''
	};
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state);
	};
	render() {
		const { title, content, tags } = this.state;
		return (
			<form className="BlogPostForm" onSubmit={this.handleSubmit}>
				<input
					value={title}
					onChange={this.handleChange}
					name="title"
					placeholder="제목"
				/>
				<textarea
					value={content}
					onChange={this.handleChange}
					name="content"
					placeholder="내용"
				/>
				<input
					value={tags}
					onChange={this.handleChange}
					name="tags"
					placeholder="태그"
				/>
				<button>작성</button>
			</form>
		);
	}
}

export default BlogPostForm;
