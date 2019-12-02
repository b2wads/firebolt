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

path=$1
name=$2

capitalize
camelCase

mkdir -p $path/$name
echo 'Created folder'

cat > $path/$name/index.js <<EOF
import $capitalizeName from './$name-container'

export default $capitalizeName
EOF

echo 'Created index'

cat > $path/$name/$name-container.js <<EOF
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import $capitalizeName from './$name-component'
import * as actions from './$name-actions'

const mapStateToProps = (state) => {
  return {
    variable: state.$camelCase
  };
};

const mapDispatchToProps = (dispatch) => {
  const actionCreators = {
    dispatch,
    ...actions
  };
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)($capitalizeName)
EOF

echo 'Created Container'

cat > $path/$name/$name-component.js <<EOF
import React from 'react'
import PropTypes from 'prop-types'

import styles from './$name.styl'

function $capitalizeName() {
  return (
    <div>$capitalizeName</div>
  )
}

$capitalizeName.propTypes = {}

export default $capitalizeName
EOF

cat > $path/$name/$name-actions.js <<EOF
import {
  TYPE_NAME
} from './$name-constants'

export function functionName() {
  return {
    type: TYPE_NAME,
    payload: []
  }
}
EOF

echo 'Created Actions'

cat > $path/$name/$name-constants.js <<EOF
export const TYPE_NAME = 'TYPE_NAME'

EOF

echo 'Created Constants'

cat > $path/$name/$name-reducer.js <<EOF

import produce from 'immer';

const initialState = {
  list: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'TYPE_NAME':
        draft.list = action.payload
        break
      default:
        return state;
    }
  })

EOF

echo 'Created Reducer'

cat > $path/$name/$name.spec.js <<EOF
import { shallow } from 'enzyme'
import React from 'react'
import $capitalizeName from './$name-component'

/** @test {$capitalizeName} */
jest.mock('react-redux', () => {
  return {
    connect: (mapStateToProps, mapDispatchToProps) => ReactComponent => ({
      mapStateToProps,
      mapDispatchToProps,
      ReactComponent,
    }),
    Provider: ({ children }) => children,
  }
})

describe('$capitalizeName component', () => {
/** @test {$capitalizeName#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <$capitalizeName />
      );
      expect(wrapper.length).to.equal(1);
    });

    it('test mapStateToProps', () => {
      const state = {
        // inclua aqui seus estados conectados
      }
      const resp = {}
      expect($capitalizeName.mapStateToProps(state)).toEqual(resp)
    })

    it('test mapDispatchToProps ', () => {
      const resp = {
        // inclua aqui suas actions
      }
      expect($capitalizeName.mapDispatchToProps).toEqual(resp)
    })
  });
});
EOF

echo 'Created Test'

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
  @extend \$default
}
EOF

echo 'Created STYL'

echo 'Created files !!'
