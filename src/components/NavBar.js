import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends React.Component {
    render() {
        return (
        <div className="Nav">
            <NavLink 
                to="/"
                style={{ marginLeft: '20px', marginRight: '20px'}}
                activeStyle={{
                    fontWeight: "bold"
                }} 
            >
                Home
            </NavLink>
            <NavLink 
                to="/events"
                style={{ marginLeft: '20px', marginRight: '20px' }}
                activeStyle={{
                    fontWeight: "bold"
                }}
            >
                Events
            </NavLink>
            {this.props.currentUser.id ? <NavLink 
                to="/profile"
                style={{ marginLeft: '20px', marginRight: '20px' }}
                activeStyle={{
                    fontWeight: "bold"
                }}
            >
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