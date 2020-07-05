import React from "react";
import { MemoryRouter as Router } from 'react-router';
import _ from "lodash";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import getUser from "../../store/actions/setUserArr";
import "./App.css";
import TestComponent from "../TestComponent";

const useStyles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
});

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      spacing : 2,
      
    };
    // setUserArr
    this.myRef = React.createRef();
  }

  componentDidMount() {
    getUser();
  }

  render() {
    const { users } = this.props;
    if (users[0] == undefined) return this.renderLoading();
    return this.renderMain();
  }

  renderLoading() {
    return <p>Loading...</p>;
  }

  renderMain() {
    const { users, classes } = this.props;
    let list = [];
    let wrappedList = [];

    if (!_.isEmpty(users)) {
      for (const user in users) {
        let ghUser = users[user];
        console.log(ghUser);
        list.push(ghUser);
      }
    }

    list.map((object) => {
      console.log({ ...object });
    });

    console.log(users);
    console.log(list);

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
        {/* <TestComponent user={list[0]} /> */}

        <Grid container className={classes.root} >
          <Grid item xs={12}>
            <Grid container justify="center" spacing={this.state.spacing}>
              {list.map((object) => {
                return (
                  <Grid key={object} item>
                    <TestComponent user={object} />
                  </Grid>
                );
              })}{" "}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(App)
