import React from 'react';
import { observer } from 'mobx-react';

class MobileHome extends React.Component {

  constructor(props) {
    super(props);

    this.state = { userName: '', firstName: '', lastName: '' };

    this.setFN = this.setFN.bind(this);
    this.setLN = this.setLN.bind(this);
    this.setUN = this.setUN.bind(this);
  }

  setFN(e) {
      this.setState({ firstName: e.target.value });
  }

  setLN(e) {
      this.setState({ lastName: e.target.value });
  }

  setUN(e) {
      this.setState({ userName: e.target.value });
  }

  render() {
    const { store } = this.props
    const { users } = store
    return (
      <div>
        <h1>Sign Up!</h1>
        <span>Username:</span>
        <input className='one-line-input' type='text' value={this.state.userName} onChange={this.setUN} />
        <br />
        <span>First Name:</span>
        <input className='one-line-input' type='text' value={this.state.firstName} onChange={this.setFN} />
        <br />
        <span>Last Name:</span>
        <input className='one-line-input' type='text' value={this.state.lastName} onChange={this.setLN} />
        <br />

        <button onClick={() => store.addUser(this.state.firstName, this.state.lastName, this.state.userName)} >Register</button>

        <div style={{ height: '200px' }}></div>
        <div><b><u>Registed Users:</u></b></div>
        {
          users.map((user) => (
            <div>{`Username: ${user.userName}, Name: ${user.firstName} ${user.lastName}`}</div>
          ))
        }
      </div>
    );
  }
}

export default observer(MobileHome);
