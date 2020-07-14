import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import App from '../components/App/App';
import getUsers from '../../store/actions/setUserArr';

const mapStateToProps = ({ users }) => ({
    users,
});

// eslint-disable-next-line arrow-parens
export default connect(
    mapStateToProps,
    getUsers,
)(App);
