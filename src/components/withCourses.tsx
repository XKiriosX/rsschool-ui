import * as React from 'react';
import * as fetch from 'isomorphic-fetch';

function withCourses(WrappedComponent: React.ComponentType<any>) {
  return class extends React.PureComponent {
    static async getInitialProps() {
      const coursesResponse = await fetch(`${process.env.RS_HOST}/api/courses`);
      if (coursesResponse.ok) {
        const courses = (await coursesResponse.json()).data;
        return { courses };
      }
      return {};
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withCourses;