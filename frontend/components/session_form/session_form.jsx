import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="login-form-box">
        Welcome to Choose Your Adventure!
        <br/>
        Please {this.props.formType} or {this.navLink()}
        {this.renderErrors()}
        <div className="form-group col-6 offset-3">
          <label>Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              placeholder="Enter Username"
              onChange={this.update('username')}
              required
            />
        </div>
        <div className="form-group col-6 offset-3">
          <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              placeholder="Enter Password"
              onChange={this.update('password')}
              required
            />
        </div>
        <div className="form-group col-12 offset-3">
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default withRouter(SessionForm);
