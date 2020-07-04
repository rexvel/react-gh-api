import React from 'react';
import getUser from '../store/actions/setUserArr';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
    };
    // setUserArr
    this.myRef = React.createRef();
  }

  componentDidMount() {
    async function func() { await getUser(); }
  }

  shouldComponentUpdate(users) {
    return users !== this.props.users;
  }

  render() {
    const { users } = this.props;
    console.log(users);
    return (
      <div className="App">
        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            ref={(element) => {
              this.input = element;
            }}
            placeholder="user"
          />
        </form>

      </div>
    );
  }
}
export default App;
