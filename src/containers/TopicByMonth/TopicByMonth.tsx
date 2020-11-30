import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import Chart from '../../components/Chart/Chart';

class TopicByMonth extends Component {
    render () {
        return (
            <Aux>
                <Chart />
            </Aux>
        )
    }
}

export default TopicByMonth;