import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import User from '../components/User';
import UserInput from '../components/UserInput';
import { getUser, updateUser } from '../actions/userActions';

class UserContainer extends React.Component {
    render() {
        return (
            <div className="user-container">
                <LoginInput getUser={this.props.getUser} />
                <User currentUser={this.props.currentUser} />
                {this.props.currentUser.id ? <UserInput updateUser={this.props.updateUser} currentUser={this.props.currentUser} /> : 'not logged in'}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { currentUser: state.currentUser }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: (user) => dispatch(getUser(user)),
        updateUser: (user) => dispatch(updateUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserContainer));
