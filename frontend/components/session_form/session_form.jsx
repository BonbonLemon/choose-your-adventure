import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionWord: "Sign In",
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
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { actionWord, username, password } = this.state;

      // <form onSubmit={this.handleSubmit} className="login-form-box">
      //   Welcome to Choose Your Adventure!
      //   <br/>
      //   Please {this.props.formType} or {this.navLink()}
      //   {this.renderErrors()}
      //   <div className="form-group col-6 offset-3">
      //     <label>Username</label>
      //       <input
      //         type="text"
      //         className="form-control"
      //         value={username}
      //         placeholder="Enter Username"
      //         onChange={this.update('username')}
      //         required
      //       />
      //   </div>
      //   <div className="form-group col-6 offset-3">
      //     <label>Password</label>
      //       <input
      //         type="password"
      //         className="form-control"
      //         value={password}
      //         placeholder="Enter Password"
      //         onChange={this.update('password')}
      //         required
      //       />
      //   </div>
      //   <div className="form-group col-12 offset-3">
      //     <input type="submit" value="Submit" />
      //   </div>
      // </form>
    return (
      <div id="session-box">
        <div id="action-box">
          <button className="action-button" onClick={this.changeAction("Sign In")} disabled={actionWord == "Sign In"}>Sign In</button>
          <button className="action-button" onClick={this.changeAction("Sign Up")} disabled={actionWord == "Sign Up"}>Sign Up</button>
        </div>
        <img id="logo" src="http://res.cloudinary.com/dnyxuskhe/image/upload/v1536261608/book_r0aisu.png"/>
        <form onSubmit={this.handleSubmit}>
          <div className="session-form-group">
            <label>Username</label>
            <input 
              type="text"
              value={username}
              onChange={this.update('username')}
            />
          </div>
          <div className="session-form-group">
            <label>Password</label>
            <input 
              type="password"
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
