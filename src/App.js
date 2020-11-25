import Layout from './components/Layout/Layout';
import TopicByMonth from './containers/TopicByMonth/TopicByMonth';
import UserProfileTopics from './containers/UserProfileTopics/UserProfileTopics';

function App() {
  return (
    <div>
      <Layout>
        <TopicByMonth />
        <UserProfileTopics />
      </Layout>
    </div>
  );
}

export default App;
