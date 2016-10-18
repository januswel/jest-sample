import 'react-native'
import React from 'react'
import Intro from './intro'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = renderer.create(
        <Intro />
    ).toJSON()
    expect(tree).toMatchSnapshot()
})
