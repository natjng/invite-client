import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { withRouter } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import User from '../components/User';

class UserContainer extends React.Component {
    render() {
        return (
            <div className="user-container">
                <LoginInput loginUser={this.props.loginUser} />
                <User currentUser={this.props.currentUser} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { currentUser: state.currentUser }
}

export default connect(mapStateToProps, { loginUser })(withRouter(UserContainer));