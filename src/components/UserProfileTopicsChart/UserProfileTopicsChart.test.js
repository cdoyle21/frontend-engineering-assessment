import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import UserProfileTopicsChart from './UserProfileTopicsChart';

configure({ adapter: new Adapter() });

describe('Render UserProfileTopicsChart component', () => {
    it('should be defined', () => {
        expect(UserProfileTopicsChart).toBeDefined();
      });
    it('should render UserProfileTopicsChart component correctly', () => {
        const wrapper = shallow(
        <UserProfileTopicsChart />,
        );
        expect(wrapper).toMatchSnapshot();
    });
  });
