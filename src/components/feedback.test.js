import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback>', () => {
    it('Should render without crashing', () => {
        shallow(<Feedback/>);
    });

    it('Should return guess again with a non-zero key', () => {
        const wrapper = shallow(<Feedback key={3}/>);
        expect(wrapper.text()).toEqual(' Guess again!');
    })
});