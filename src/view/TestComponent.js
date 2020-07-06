import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  avatar: {
    maxWidth: 100,
    maxHeight: 100,
    margin:'0 auto'
  },
  cardBody: {
    width: 170,
  },
  userDetailLink: {
    justifyContent:'center',
    textDecoration:'none',
  }

});

const TestComponent = (props) => {
  const classes = useStyles();
  const { user } = props;
  const {url} = user
  const preventDefault = (event) => event.preventDefault();

  return (
    <Card  spacing={2}>
       <a href={user.html_url}  target="_blank">
        <CardActionArea className={classes.cardBody}>
        <CardMedia className={classes.avatar}
          component="img"
          alt="Contemplative Reptile"
          height="100"
          width="100"
          image={user.avatar_url}
          title="Contemplative Reptile"
        />
      </CardActionArea >

      </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.login}
          </Typography>
        </CardContent>
     
      <CardActions className={classes.userDetailLink}>
        <Link 
          to={{
            pathname: "/user",
            state:{
              url,
            }
          }}
        >
          More info
        </Link>
      </CardActions>
      <CardActions className={classes.userDetailLink}>
          <a href={user.html_url}  target="_blank">
            Github profile
          </a>
      </CardActions>
    </Card>
  );
};
export default TestComponent;
