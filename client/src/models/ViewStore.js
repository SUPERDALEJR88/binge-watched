import { types } from 'mobx-state-tree';

export const ViewStore = types
  .model('ViewStore', {
    isMobile: types.boolean,
    width: types.number,
    currentPage: types.maybeNull(types.string, 'Home'),
  })
  .actions(self => ({
    setIsMobile(isMobile) {
      self.isMobile = isMobile
    },
    setWidth(width) {
      self.width = width
    },
    setCurrentPage(view) {
      if (view === '/') {
        self.currentPage = 'Home'
      } else if (view === '/about') {
        self.currentPage = 'About'
      } else {
        self.currentPage = view
      }
    },
  }))
