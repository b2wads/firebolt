#! /bin/bash

capitalize() {
  IFS="-"
  words=($name)

  output=""

  for word in "${words[@]}"; do
    # add capitalized 1st letter
    output+="$(tr '[:lower:]' '[:upper:]' <<<"${word:0:1}")"
    # add lowercase version of rest of word
    output+="$(tr '[:upper:]' '[:lower:]' <<<"${word:1}")"
  done

  unset IFS

  capitalizeName=$output
}

camelCase() {
  IFS="-"
  words=($name)

  output=""

  for word in "${words[@]}"; do
    if [ ${words[0]} == $word ]
    then
      output+="$(tr '[:upper:]' '[:lower:]' <<<"${word}")"
    else
      output+="$(tr '[:lower:]' '[:upper:]' <<<"${word:0:1}")"
      output+="$(tr '[:upper:]' '[:lower:]' <<<"${word:1}")"
    fi
  done

  unset IFS

  camelCase=$output
}

clear

name=$1
path=$2

capitalize
camelCase

mkdir $path/$name
echo 'Created folder'

touch $path/$name/index.js
cat > $path/$name/index.js <<EOF
import $capitalizeName from './$name-container';

export default $capitalizeName;
EOF

echo 'Created index'

touch $path/$name/$name-container.js
cat > $path/$name/$name-container.js <<EOF
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $capitalizeName from './$name-component';
import * as actions from './$name-actions';

const mapStateToProps = (state) => {
  return {
    variable: state.reducers.$camelCase.variable
  };
};

const mapDispatchToProps = (dispatch) => {
  const actionCreators = {
    dispatch,
    ...actions
  };
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)($capitalizeName);
EOF

echo 'Created Container'

touch $path/$name/$name-component.js
cat > $path/$name/$name-component.js <<EOF
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './$name.styl';

function $capitalizeName() {
  return (
    <div>$capitalizeName</div>
  );
}

$capitalizeName.propTypes = {}

export default CSSModules($capitalizeName, styles);
EOF

echo 'Created Component'

touch $path/$name/$name-constants.js
cat > $path/$name/$name-constants.js <<EOF
export const CONSTANT_NAME = 'CONSTANT_NAME';

EOF

echo 'Created Constants'

touch $path/$name/$name-actions.js
cat > $path/$name/$name-actions.js <<EOF
import {
  TYPE_NAME
} from './$name-types';

export function functionName() {
  return {
    type: TYPE_NAME,
    payload: {
    }
  }
}
EOF

echo 'Created Actions'

touch $path/$name/$name-reducer.js
cat > $path/$name/$name-reducer.js <<EOF
const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TYPE_NAME':
      return { ...state }
    default:
      return state;
  }
};
EOF

echo 'Created Reducer'

touch $path/$name/$name.spec.js
cat > $path/$name/$name.spec.js <<EOF
import { shallow } from 'enzyme'
import $capitalizeName from './$name-component';

/** @test {$capitalizeName} */
describe('$capitalizeName component', () => {
/** @test {$capitalizeName#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <$capitalizeName />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});
EOF

echo 'Created Test'

touch $path/$name/$name.styl
cat > $path/$name/$name.styl <<EOF
/* ==========================================================================
   Variables
========================================================================== */


/* Color
========================================================================== */

/* ==========================================================================
   Placeholders
========================================================================== */
\$default {}

/* ==========================================================================
   $capitalizeName Component
========================================================================== */

/* Default
 ================ */

.default {
  @extend \$default;
}
EOF

echo 'Created STYL'

echo 'Created files !!'
