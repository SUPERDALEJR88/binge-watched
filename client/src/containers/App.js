import React from 'react';
import { observer } from 'mobx-react';
import Mobile from './Mobile';
import Desktop from './Desktop';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    const { store, router } = this.props;
    const { viewStore } = store;

    this.setState({ width: window.innerWidth, height: window.innerHeight });
    viewStore.setWidth(this.state.width)
    viewStore.setCurrentPage(router.currentUrl)
    if (this.state.width < 900) {
      this.setState({ isMobile: true });
      viewStore.setIsMobile(true);
    } else {
      this.setState({ isMobile: false });
      viewStore.setIsMobile(false);
    }
  }

  render() {
    const { store, router, views } = this.props;
    const { viewStore, users } = store;
    const { isMobile } = this.state;

    if (isMobile) {
      return <Mobile router={router} views={views} viewStore={viewStore} users={users} />
    }

    return <Desktop router={router} views={views} viewStore={viewStore} />
  }

}

export default observer(App);
