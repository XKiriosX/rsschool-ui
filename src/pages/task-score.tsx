import * as React from 'react';
import TaskScoreForm from '../components/TaskScoreForm';
import Header from '../components/Header';
import withSession, { Session } from '../components/withSession';

import '../index.scss';

type Props = {
  session?: Session;
};

class TaskScorePage extends React.Component<Props> {
  render() {
    if (!this.props.session) {
      return null;
    }
    return (
      <>
        <div>
          <Header username={this.props.session.githubId} />
          <TaskScoreForm courseId={1} />
        </div>
      </>
    );
  }
}

export default withSession(TaskScorePage);
