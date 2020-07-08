/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    avatar: {
        maxWidth: 100,
        maxHeight: 100,
        margin: '0 auto',
    },
    cardBody: {
        width: 170,
    },
    userDetailLink: {
        justifyContent: 'center',
        textDecoration: 'none',
    },
});

const TestComponent = ({ user }) => {
    const classes = useStyles();
    const { url, html_url, login, avatar_url } = user;

    return (
        <Card spacing={2}>
            <a href={html_url} rel="noopener noreferrer" target="_blank">
                <CardActionArea className={classes.cardBody}>
                    <CardMedia
                        className={classes.avatar}
                        component="img"
                        alt="Contemplative Reptile"
                        height="100"
                        width="100"
                        image={avatar_url}
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
            </a>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {login}
                </Typography>
            </CardContent>

            <CardActions className={classes.userDetailLink}>
                <Link
                    to={{
                        pathname: '/user',
                        state: {
                            url,
                        },
                    }}
                >
                    More info
                </Link>
            </CardActions>
            <CardActions className={classes.userDetailLink}>
                <a href={html_url} rel="noopener noreferrer" target="_blank">
                    Github profile
                </a>
            </CardActions>
        </Card>
    );
};

export default TestComponent;

TestComponent.propTypes = {
    user: PropTypes.shape({
        url: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
    }).isRequired,
};
