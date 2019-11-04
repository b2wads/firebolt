import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './meu-componente.styl';

function MeuComponente() {
    return (
      <div>MeuComponente</div>
    );
}

MeuComponente.propTypes = {}

export default CSSModules(MeuComponente, styles);
