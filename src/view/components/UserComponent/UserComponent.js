import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {getUser} from '../../../store/actions/getUserData';

const useStyles = makeStyles({
    wrapper: {
        maxWidth: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    userImg: {
        width: 300,
        height: 300,
    },
});

const obgect = {
    wrappedObject: {
        first: 'first',
        second: 'second',
    },
};

const UserComponent = ({ exactUser, location }) => {
    const classes = useStyles();
    console.log(exactUser);
    const [usr, setFollowers] = useState(0);
    // eslint-disable-next-line react/prop-types
    const { state } = location;
    const { url } = state;
    console.log(location)
    useEffect(() => {
        //old version
        //     (async () => {
        //         try {
        //             const user = await fetch(url);
        //             const data = await user.json();

        //             setFollowers(data);
        //         } catch (e) {
        //             console.error(e);
        //         }
        //     })();
        // },
    getUser(url);
    setFollowers(exactUser);
    }, []);

    // eslint-disable-next-line camelcase
    const { name, email, location: loc, followers, created_at, company, bio, blog } = usr;

    const time = Date.parse(created_at);

    const date = new Date(time);

    const createdAt = date.toString().substring(4, 34);
    const neededData = {
        name,
        email,
        loc,
        followers,
        createdAt,
        company,
        bio,
        blog,
    };
    const rowName = [];
    const rowValue = [];

    for (const i in neededData) {
        rowName.push(i);
    }
    for (const i in neededData) {
        rowValue.push(neededData[i]);
    }

    const availableContent = obj => {
        for (const elem in obj) {
            return (
                <p>
                    {elem}: {obj[elem]}
                </p>
            );
        }
    };

    return (
        <Container maxWidth="sm" className={classes.wrapper}>
            <Avatar src={usr.avatar_url} className={classes.userImg} />
            <div>
                <p>{obgect.wrappedObjec}</p>
                <p>{usr.login}</p>
                <p> location: {loc}</p>
                <p> followers: {followers}</p>
                <p> created at: {createdAt}</p>
                <p>
                    blog:
                    <a target="blank" href={usr.blog}>
                        {blog}
                    </a>
                </p>
                <p> bio: {bio}</p>
                <p> company: {company}</p>
                <p> email: {email}</p>
            </div>
        </Container>
    );
};

export default UserComponent;

UserComponent.propTypes = {
    state: PropTypes.shape({
        location: PropTypes.shape({
            url: PropTypes.string.isRequired,
        }),
    }).isRequired,
};
