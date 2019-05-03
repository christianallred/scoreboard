import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Link to={"/court"}>Court</Link>
        <Link to={"/courtadmin"}>Admin</Link>
        this tinger
      </div>
    );
  }

}

var mapStateToProps = (state) => {
  return state

}

var mapDispatchToProps = {

}

var HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
export default HomeContainer;
