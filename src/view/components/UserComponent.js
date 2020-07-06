import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import _ from "lodash";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  userImg: {
    width: 300,
    height: 300,
  },
}));

const PHOC = (value) => {
  if (value !== null && value !== undefined) {
    return (
      <>
        <p> {value}</p>
      </>
    );
    return;
  }
};

const UserComponent = (props) => {
  const classes = useStyles();

  const [usr, setFollowers] = useState(0);
  const { url } = props.location.state;
  console.log(url);

  useEffect(() => {
    (async () => {
      try {
        const user = await fetch(url);
        const data = await user.json();
        setFollowers(data);
      } catch (e) {
        console.error(e);
      }
    })();

    // promise version
    // fetch(url)
    //   .then(user => user.json())
    //   .then(data =>  setFollowers(data))
    //   .catch(e => {
    //     console.error(e)
    //   });
  }, []);

  console.log(usr);
  const {
    name,
    email,
    location,
    followers,
    created_at,
    company,
    bio,
    blog,
  } = usr;

  const time = Date.parse(created_at);
  let date = new Date(time);
  const createdAt = date.toString().substring(4, 34);
  const neededData = {
    name,
    email,
    location,
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
  console.log(rowName);

  const availableContent = (obj) => {
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
        {/* { Object.keys(neededData).map(item => {
        
         return <p>{item}:{neededData[item]} </p>
        console.log(item) 
        })}
        {availableContent(neededData)} */}
        <p>{usr.login}</p>
        <p> location: {location}</p>
        <p> followers: {followers}</p>
        <p> created at: {createdAt}</p>
        <p>
          blog:
          <a target="blank" href={usr.blog}>
            {blog}
          </a>
        </p>
        <pHOC value={email}></pHOC>
        <p> bio: {bio}</p>
        <p> company: {company}</p>
        <p> email: {email}</p>
      </div>
    </Container>
  );
};
export default UserComponent;
