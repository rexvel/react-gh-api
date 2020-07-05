import React, { useState, useEffect } from "react";

const UserComponent = (props) => {
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

    // promise
    // fetch(url)
    //   .then(user => user.json())
    //   .then(data =>  setFollowers(data))
    //   .catch(e => {
    //     console.error(e)
    //   });  
  }, []);

  console.log(usr.name);
  console.log(usr);

  return (
    <>
      <img src={usr.avatar_url} />
      <p>{usr.login}</p>
      <p> location: {usr.location}</p>
      <p> followers: {usr.followers}</p>
      <p> created at: {usr.created_at}</p>
      <p> blog: {usr.blog}</p>
      <p> bio: {usr.bio}</p>
      <p> company: {usr.company}</p>
      <p> email: {usr.email}</p>
    </>
  );
};
export default UserComponent;
