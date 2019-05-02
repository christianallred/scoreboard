import React from 'react';
// import PropTypes from 'prop-types';
import './Team.css'

const Team = ({players, points, colors}) => {
  console.log(players);
  return (
    <div className="Team">
      <div  className="TeamPlayer">{players}</div>
      <div  className="TeamPoints">{points}</div>
    </div>
  );
}

Team.propTypes = {
  // : PropTypes.
};

export default Team;
