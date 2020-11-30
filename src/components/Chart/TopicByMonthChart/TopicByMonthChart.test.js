import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import TopicByMonthChart from './TopicByMonthChart';

configure({ adapter: new Adapter() });

describe('Render TopicByMonthChart component', () => {
    it('should be defined', () => {
        expect(TopicByMonthChart).toBeDefined();
      });
    it('should render TopicByMonthChart component correctly', () => {
        const wrapper = shallow(
        <TopicByMonthChart />,
        );
        expect(wrapper).toMatchSnapshot();
    });
  });
