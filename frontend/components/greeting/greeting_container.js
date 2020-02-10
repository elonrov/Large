import { connect } from 'react-redux'; 
import { logoutUser } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
