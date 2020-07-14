import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import getUsers from '../../../store/actions/setUserArr';
import TestComponent from '../../TestComponent';
import './App.css';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
});

class App extends React.Component {
    state = {
        spacing: 2,
    };

    myRef = React.createRef();

    static propTypes = {
        users: PropTypes.shape.isRequired,
        classes: PropTypes.objectOf({
            root: PropTypes.objectOf({
                flexGrow: PropTypes.number.isRequired,
            }),
        }).isRequired,
    };

    componentDidMount() {
        getUsers();
    }

    renderLoading = () => <p>Loading...</p>;

    renderMain() {
        const { spacing } = this.state;
        const { users, classes } = this.props;
        const { root } = classes;
        const list = [];

        if (!_.isEmpty(users)) {
            for (const user in users) {
                const ghUser = users[user];

                console.log(ghUser);
                list.push(ghUser);
            }
        }

        return (
            <div className="App" style={{ padding: '70px' }}>
                <Grid container className={root}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={spacing}>
                            {list.map(object => {
                                return (
                                    <Grid key={_.uniqueId(object)} item>
                                        <TestComponent user={object} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

    render() {
        const { users } = this.props;

        return users[0] === undefined ? this.renderLoading() : this.renderMain();
    }
}

export default withStyles(useStyles)(App);
