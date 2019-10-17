import React from 'react';
import { connect } from 'react-redux';
import UserContainer from './UserContainer';
import Dashboard from './Dashboard';

class Home extends React.Component {
    render() {
        return (
            <div>
                {this.props.currentUser.id ? <Dashboard /> : <UserContainer />}
            </div>
        )
    }
}

// disconnect dashboard, pass in currentUser prop from Home?

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    };
}

export default connect(mapStateToProps)(Home);