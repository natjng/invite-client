import React from 'react';
import { connect } from 'react-redux';
import UserContainer from './UserContainer';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                {/* show dashboard component */}
                {this.props.currentUser.id ? `Hello, ${this.props.currentUser.name}` : <UserContainer />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    };
}

export default connect(mapStateToProps)(Home);