import React from 'react';
import { observer } from 'mobx-react';
import { Link, StateRouter } from 'mobx-state-tree-router';

class Desktop extends React.Component {

  render() {
   const { router, views, viewStore } = this.props;

   return (
     <div style={{ backgroundColor: '#ededed' }}>
       DESKTOP
     </div>
   );
 }


}

export default observer(Desktop);
