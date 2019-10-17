import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends React.Component {
    render() {
        return (
        <div>
            <NavLink 
                to="/"
                style={{ marginRight: '10px' }}
                activeStyle={{
                    fontWeight: "bold"
                }} 
            >
                Home
            </NavLink>
            <NavLink 
                to="/events"
                style={{ marginRight: '10px' }}
                activeStyle={{
                    fontWeight: "bold"
                }}
            >
                Events
            </NavLink>
            {this.props.currentUser.id ? <NavLink to="/profile">
                Profile
            </NavLink> : ''}
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    };
  }

export default connect(mapStateToProps)(NavBar);