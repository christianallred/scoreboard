import React from 'react';
// import PropTypes from 'prop-types';
import './Match.css'
import Team from './Team'

const Match = ({TeamA, TeamB}) => {
  return (
    <div className="Match">
      <Team players={TeamA.Name} points={TeamA.Points} />
      <Team players={TeamB.Name} points={TeamB.Points} />
    </div>
  );
}

Match.propTypes = {
  // : PropTypes.
};

export default Match;
