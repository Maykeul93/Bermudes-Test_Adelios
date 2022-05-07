import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';

const NoMatch = props => {
  return (
    <div>
      <h3>
        Erreur, page non trouvé!
      </h3>
    </div>
  );
  
}

NoMatch.propTypes = {}

export default NoMatch