import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import Chart from './Chart';

configure({ adapter: new Adapter() });

describe('Render Chart component', () => {
    it('should be defined', () => {
        expect(Chart).toBeDefined();
      });
    it('should render Chart component correctly', () => {
        const wrapper = shallow(
        <Chart />,
        );
        expect(wrapper).toMatchSnapshot();
    });
  });
