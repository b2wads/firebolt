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
import $capitalizeName from './$name-component'

export default $capitalizeName
EOF

echo 'Created index'

cat > $path/$name/$name-component.js <<EOF
import React from 'react'
import PropTypes from 'prop-types'

import styles from './$name.styl'

function $capitalizeName() {
    return (
      <div>$capitalizeName</div>
    );
}

$capitalizeName.propTypes = {}

export default $capitalizeName
EOF

echo 'Created Component'

cat > $path/$name/$name.spec.js <<EOF

import { shallow } from 'enzyme'
import $capitalizeName from './$name-component'

/** @test {$capitalizeName} */
describe('$capitalizeName component', () => {
/** @test {$capitalizeName#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <$capitalizeName />
      );
      expect(wrapper.length).toEqual(1)
    });
  });
});
EOF

echo 'Created Test'

cat > $path/$name/$name.styl <<EOF
/* ==========================================================================
   Variables
========================================================================== */


/* ==========================================================================
   Placeholders
========================================================================== */
\$default {}

/* ==========================================================================
   $capitalizeName Elements
========================================================================== */

/* ==========================================================================
   $capitalizeName Props
========================================================================== */

/* Default
 ================ */

.default {
  @extend \$default
}
EOF

echo 'Created STYL'

echo 'Created files !!'

node_modules/.bin/prettier --write "src/components/$name/*.js"
node_modules/.bin/eslint --fix .