import React from 'react';
import { observer } from 'mobx-react';
import { Link, StateRouter } from 'mobx-state-tree-router';

class Mobile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { router, views, viewStore, users } = this.props;

    return (
      <div style={{ backgroundColor: '#ededed' }}>
        <StateRouter router={router} />
      </div>
    );
  }

}

export default observer(Mobile);
