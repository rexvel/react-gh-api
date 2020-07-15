import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

const UserComponent = (props) => {
  const classes = useStyles();

  const [usr, setFollowers] = useState(0);
  const { url } = props.location.state;

  useEffect(() => {
    (async () => {
      try {
        const user = await fetch(url);
        const data = await user.json();
        setFollowers(data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    })();
  }, [url]);

  console.log(usr);
  const { email, location, followers, created_at, company, bio, blog } = usr;

  const time = Date.parse(created_at);
  const date = new Date(time);
  const createdAt = date.toString().substring(4, 34);

  return (
    <Container maxWidth="sm" className={classes.wrapper}>
      <Avatar src={usr.avatar_url} className={classes.userImg} />
      <div>
        <p>{usr.login}</p>
        <p>
          location:
          {location}
        </p>
        <p>
          followers:
          {followers}
        </p>
        <p>
          created at:
          {createdAt}
        </p>
        <p>
          blog:
          <a target="blank" href={usr.blog}>
            {blog}
          </a>
        </p>
        <p>
          bio:
          {bio}
        </p>
        <p>
          company:
          {company}
        </p>
        <p>
          email:
          {email}
        </p>
      </div>
    </Container>
  );
};
export default UserComponent;
