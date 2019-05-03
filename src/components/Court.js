import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Match from './Match';

class Court extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Match {...this.props.match} />
      </div>
    );
  }

}
var mapStateToProps = (state) => {
  return {
    match: state.court1
  }
}
var mapDispatchToProps = {

}

var CourtContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Court);
export default CourtContainer;
