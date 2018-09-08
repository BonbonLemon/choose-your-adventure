import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionWord: "Log In",
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  changeAction(word) {
    return e => {
      this.setState({
        actionWord: word
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { actionWord, username, password } = this.state;

    if (actionWord == "Log In") {
      this.props.logIn({username, password});
    } else if (actionWord == "Sign Up") {
      this.props.signUp({username, password});
    }
  }

  renderErrors() {
    return(
      <div id="session-errors">
        {this.props.errors.map((error, i) => (
          <div key={`error-${i}`}>
            {error}
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { actionWord, username, password } = this.state;

    return (
      <div id="session-box">
        <div id="action-box">
          <button className="action-button" onClick={this.changeAction("Log In")} disabled={actionWord == "Log In"}>Log In</button>
          <button className="action-button" onClick={this.changeAction("Sign Up")} disabled={actionWord == "Sign Up"}>Sign Up</button>
        </div>
        <img id="session-logo" src="http://res.cloudinary.com/dnyxuskhe/image/upload/v1536262539/d80ac68d4883a2b14b8e346fce09b5c6_z50qex.png"/>
        { this.renderErrors() }
        <form onSubmit={this.handleSubmit}>
          <div className="session-form-group">
            <label>Username</label>
            <input 
              type="text"
              className="form-control"
              value={username}
              onChange={this.update('username')}
            />
          </div>
          <div className="session-form-group">
            <label>Password</label>
            <input 
              type="password"
              className="form-control"
              value={password}
              onChange={this.update('password')}
            />
          </div>
            <input 
              type="submit"
              id="session-submit-button"
              value={actionWord}
            />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
