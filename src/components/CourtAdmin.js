import React from 'react';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import "./CourtAdmin.css"
import {increment,decrement,reset,updateName} from '../reducer/rootReducer';

const Courtadmin = ({
  court,
  increment,
  decrement,
  reset,
  updateName,
}) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <div className="Controls">
        <input
          className="Input"
          value={court.TeamA.Name}
          onChange={(change) => updateName('court1', 'TeamA', change.target.value)} />
        <div
          className="Button"
          onClick={() => increment('court1','TeamA')}> + </div>
        <div className="Score">{ court.TeamA.Points }</div>
        <div
          className="Button"
          onClick={() => decrement('court1','TeamA')}> - </div>
      </div>
      <div className="Controls">
        <input
          className="Input"
          value={court.TeamB.Name}
          onChange={(change) => updateName('court1', 'TeamB', change.target.value)} />
        <div
          className="Button"
          onClick={() => increment('court1','TeamB')}> + </div>
        <div className="Score">{ court.TeamB.Points }</div>
        <div
          className="Button"
          onClick={() => decrement('court1','TeamB')}> - </div>
      </div>
      <div className="Button"
        onClick={() => reset('court1')}>Reset</div>
    </div>
  );
}

var mapStateToProps = (state) => {
  return {
    court: state.court1,
    // pointsA: state.court1.TeamA.Points
  }
}

var mapDispatchToProps =  {
  increment,
  decrement,
  reset,
  updateName
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure: false}
)(Courtadmin);
