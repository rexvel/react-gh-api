import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import App from '../components/App';
import getUser from '../../store/actions/setUserArr';

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps, getUser)(App);
