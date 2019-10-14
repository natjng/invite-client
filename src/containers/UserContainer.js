import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import User from '../components/User';
import { getUser } from '../actions/userActions';

class UserContainer extends React.Component {
    render() {
        return (
            <div className="user-container">
                <LoginInput getUser={this.props.getUser} />
                <User currentUser={this.props.currentUser} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { currentUser: state.currentUser }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: (user) => dispatch(getUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserContainer));
