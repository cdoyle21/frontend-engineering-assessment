import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import TopicByMonthChart from '../../components/TopicByMonthChart/TopicByMonthChart';
import UserProfileTopicsChart from '../../components/UserProfileTopicsChart/UserProfileTopicsChart';
import Buttons from '../../components/Buttons/Buttons';

class Charts extends Component {
    state = {
        showTopicByMonth: true,
        showUserProfileTopics: false
    }

    toggleUserProfileTopicsHandler = () => {
        const doesShowTopicByMonth = this.state.showTopicByMonth;
        const doesShowUserProfileTopics = this.state.showUserProfileTopics;
        this.setState({showTopicByMonth: !doesShowTopicByMonth});
        this.setState({showUserProfileTopics: !doesShowUserProfileTopics});
    }

    toggleTopicByMonthHandler = () => {
        const doesShowTopicByMonth = this.state.showTopicByMonth;
        const doesShowUserProfileTopics = this.state.showUserProfileTopics;
        this.setState({showTopicByMonth: !doesShowTopicByMonth});
        this.setState({showUserProfileTopics: !doesShowUserProfileTopics});
    }

    render () {
        let topicByMonthChart = null;
        let userProfileTopicChart = null;

        if (this.state.showTopicByMonth) {
            topicByMonthChart = (
                <div>
                    <ParentSize>{({ width, height }) => <TopicByMonthChart width={width} height={height} />}</ParentSize>
                    <Buttons clicked={this.toggleUserProfileTopicsHandler}>USER PROFILES CHART</Buttons>
                </div>
            )
        } else {
            userProfileTopicChart = (
                <div>
                    <ParentSize>{({ width, height }) => <UserProfileTopicsChart width={width} height={height} />}</ParentSize>
                    <Buttons clicked={this.toggleTopicByMonthHandler}>TOPICS BY MONTH CHART</Buttons>
                </div>
            )
        }

        return (
            <Aux>
                {topicByMonthChart}
                {userProfileTopicChart}
            </Aux>
        )
    }
}

export default Charts;