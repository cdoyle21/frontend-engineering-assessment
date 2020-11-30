import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import Buttons from './Buttons';

configure({ adapter: new Adapter() });

describe('Render Buttons component', () => {
    const mockFn = jest.fn();
    it('should be defined', () => {
        expect(Buttons).toBeDefined();
      });
    it('should render Buttons component correctly', () => {
        const wrapper = shallow(
        <Buttons name="button" handleClick={mockFn} />,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should have a button value', () => {
        const wrapper = shallow(
            <Buttons name="button test" handleClick={mockFn} />
        );
        expect(typeof(wrapper.find('.Button').node.props.value)).toBe('string');
        expect(wrapper.find('.Button').node.props.value).toEqual('button test');
    });
    it('should have a click function', () => {
        const wrapper = shallow(
          <Buttons name='button' handleClick={mockFn} />
        );
        wrapper.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
  });
