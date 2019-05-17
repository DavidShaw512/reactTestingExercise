import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game>', () => {
    it('Should render without crashing', () => {
        shallow(<Game/> );
    });

    it('Should reset to a new game', () => {
        const wrapper = shallow(<Game/>);
        wrapper.setState({
            guesses: [2, 5],
            feedback: "Sample",
            auralStatus: "Sample",
            correctAnswer: -1
        });
        wrapper.instance().restartGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('auralStatus')).toEqual('');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    });

    it('Should reject any guesses that are not valid numbers', () => {
        const wrapper = shallow(<Game/>);
        wrapper.instance().makeGuess("Not a number");
        expect(wrapper.state('feedback')).toEqual('Please enter a valid number');
    });

    it('Should indicate if the guess was correct', () => {
        const wrapper = shallow(<Game/>);
        wrapper.setState({
            correctAnswer: 50
        });
        wrapper.instance().makeGuess(50);
        expect(wrapper.state('feedback')).toEqual("You got it!");
    });

    it('Should indicate if the guess was almost correct', () => {
        const wrapper = shallow(<Game/>);
        wrapper.setState({
            correctAnswer: 50
        });
        wrapper.instance().makeGuess(49);
        expect(wrapper.state('feedback')).toEqual("You\'re Hot!");
    });
});