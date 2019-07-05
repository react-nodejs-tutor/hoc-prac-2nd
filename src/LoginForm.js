import React, { Component } from 'react';

class LoginForm extends Component {
	state = {
		username: '',
		password: ''
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
		const { username, password } = this.state;
		return (
			<form className="LoginForm" onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleChange}
					value={username}
					name="username"
					placeholder="계정"
				/>
				<input
					onChange={this.handleChange}
					value={password}
					name="password"
					type="password"
					placeholder="비밀번호"
				/>
				<button>로그인</button>
			</form>
		);
	}
}

export default LoginForm;
