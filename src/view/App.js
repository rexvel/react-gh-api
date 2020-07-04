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

  // eslint-disable-next-line class-methods-use-this
  // getUser() {
  //   fetch('https://api.github.com/users?/since=100&per_page=100')
  //     .then((response) => response.json())
  //     .then((response) =>{
  //       console.log(typeof setUserArr)
  //       setUserArr(response);
  //     })
  // }

  //  getUser();
  // getUser(username) {
  //   fetch(`https://api.github.com/users/since/100`)
  //   // fetch(`https://api.github.com/users/since/100${username }`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       return response;
  //     });
  // }

  componentDidMount() {
    async function func() { await getUser(); }
    console.log('I am ALIVE');
    func();
  }

  shouldComponentUpdate(users) {
    return users !== this.props.users;
    console.log('I am bruh');
  }

 
  render() {
    const { users } = this.props;
    console.log(users);
    return (
      <div className="App">
        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
          {/* eslint-disable-next-line react/no-string-refs */}
          <input
            type="text"
            ref={(element) => {
              this.input = element;
            }}
            placeholder="user"
          />
          {/* onChange={(e) => this.handleSubmit(e)}  */}
        </form>

      </div>
    );
  }
}
export default App;
