import { applySnapshot } from 'mobx-state-tree';
import { GlobalStore } from './GlobalStore';

let store = null;

export function initStore(snapshot = null) {
  if (!store) {
    store = GlobalStore.create({
      viewStore: {
        isMobile: true,
        width: 0,
        currentPage: 'Home',
      },
      users:
        [
          {
            firstName: 'nathan',
            lastName: 'carlson',
            userName: 'newBootGoofin'
          },
          {
            firstName: 'matt',
            lastName: 'mccarthy',
            userName: 'DaBluntLord'
          }
        ],
    });
  }
  if (snapshot) {
    applySnapshot(store, snapshot)
  }
  store.getUsers()
  return store;
}
