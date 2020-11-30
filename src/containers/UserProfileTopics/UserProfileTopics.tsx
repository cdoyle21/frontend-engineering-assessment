import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import Chart from '../../components/Chart/Chart';

class UserProfileTopics extends Component {
    render () {
        return (
            <Aux>
                <Chart />
            </Aux>
        )
    }
}

export default UserProfileTopics;