import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import Buttons from '../Buttons/Buttons';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import TopicByMonthChart from '../Chart/TopicByMonthChart/TopicByMonthChart';
import UserProfileTopicsChart from '../Chart/UserProfileTopicsChart/UserProfileTopicsChart';

class TopicByMonth extends Component {
    render () {
        return (
            <Aux>
                <ParentSize>{({ width, height }) => <TopicByMonthChart width={width} height={height} />}</ParentSize>
                <ParentSize>{({ width, height }) => <UserProfileTopicsChart width={width} height={height} />}</ParentSize>
                <Buttons>TOPICS BY MONTH</Buttons>
            </Aux>
        )
    }
}

export default TopicByMonth;