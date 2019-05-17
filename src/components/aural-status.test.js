import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus>', () => {
    it("Should render without crashing", () => {
        shallow(<AuralStatus/>);
    });
});