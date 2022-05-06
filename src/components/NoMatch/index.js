import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';

const NoMatch = props => {
  let location = useLocation;
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
  
}

NoMatch.propTypes = {}

export default NoMatch