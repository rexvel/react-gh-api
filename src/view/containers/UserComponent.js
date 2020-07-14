import { connect } from 'react-redux';
import UserComponent from '../components/UserComponent/UserComponent';
import { getUser } from '../../store/actions/getUserData';

const mapStateToProps = ({ exactUser }) => ({
    exactUser,
});

// eslint-disable-next-line arrow-parens
export default connect(
    mapStateToProps,
    getUser,
)(UserComponent);
