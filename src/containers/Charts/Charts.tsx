import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import TopicByMonthChart from '../../components/TopicByMonthChart/TopicByMonthChart';
import UserProfileTopicsChart from '../../components/UserProfileTopicsChart/UserProfileTopicsChart';
import Buttons from '../../components/Buttons/Buttons';
import { ApolloClient, InMemoryCache, gql, } from '@apollo/client';

export const GET_POSTS = gql`{
    allPosts(count: 10) {
        id
        createdAt
        likelyTopics {
         label
         likelihood
       }
    }
  }`

  const client = new ApolloClient({
    uri: "https://fakerql.nplan.io/graphql",
    cache: new InMemoryCache()
  });

  type ShowCharts = {
    showTopicByMonth: boolean;
    showUserProfileTopics: boolean;
    posts: any;
    error: boolean;
}

class Charts extends Component <{}, ShowCharts> {
    constructor(props: ShowCharts) {
        super(props)
        this.state = {
            showTopicByMonth: true,
            showUserProfileTopics: false,   
            posts: [],
            error: false        
        }
      }     

    // Load data from graphql endpoint  

    componentDidMount () {
      client
        .query({
          query: GET_POSTS,
        })
          .then(response => {
            this.setState({posts: response.data.allPosts});
          })
          .catch(error => {
            this.setState({error: true});
        });
    }

    // Show User Profile Topics Chart Handler

    toggleUserProfileTopicsHandler = () => {
        const doesShowTopicByMonth = this.state.showTopicByMonth;
        const doesShowUserProfileTopics = this.state.showUserProfileTopics;
        this.setState({showTopicByMonth: !doesShowTopicByMonth});
        this.setState({showUserProfileTopics: !doesShowUserProfileTopics});
    }

    // Show Topic By Month Chart Handler

    toggleTopicByMonthHandler = () => {
        const doesShowTopicByMonth = this.state.showTopicByMonth;
        const doesShowUserProfileTopics = this.state.showUserProfileTopics;
        this.setState({showTopicByMonth: !doesShowTopicByMonth});
        this.setState({showUserProfileTopics: !doesShowUserProfileTopics});
    }

    render () {
      //catch error check to see that data has loaded
      let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
      if (!this.state.error) {
          posts = this.state.posts;
      }

      let toggleTopicByMonthChart = null;
      let toggleUserProfileTopicChart = null;

      if (this.state.showTopicByMonth) {
          toggleTopicByMonthChart = (
              <div>
                  <ParentSize>{({ width, height }) => <TopicByMonthChart data={posts} width={width} height={height} />}</ParentSize>
                  <Buttons clicked={this.toggleUserProfileTopicsHandler}>USER PROFILES CHART</Buttons>
              </div>
          )
      } else {
          toggleUserProfileTopicChart = (
              <div>
                  <ParentSize>{({ width, height }) => <UserProfileTopicsChart width={width} height={height} />}</ParentSize>
                  <Buttons clicked={this.toggleTopicByMonthHandler}>TOPICS BY MONTH CHART</Buttons>
              </div>
          )
      }

      return (
          <Aux>    
              {toggleTopicByMonthChart}
              {toggleUserProfileTopicChart}
          </Aux>
      )
    }
}

export default Charts;