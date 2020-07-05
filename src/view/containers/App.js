import { connect } from "react-redux";
// import { bindActionCreators } from 'redux';
import App from "../components/App";
import getUser from '../../store/actions/setUserArr';

const mapStateToProps = ({ users }) => ({
  users,
});



// eslint-disable-next-line arrow-parens
// getUser - thunk
export default connect(mapStateToProps, getUser)(App);
