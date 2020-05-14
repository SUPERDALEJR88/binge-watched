import React from 'react';
import { observer } from 'mobx-react';
import MobileHome from '../components/mobile/home/MobileHome';

class Home extends React.Component {

  render() {
    const { store } = this.props;
    const { viewStore } = store;

    if (viewStore.isMobile) {
      return <MobileHome store={store} />
    }
    return <div>Desktop Home</div>
  }
}

export default observer(Home);
