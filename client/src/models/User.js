import { types } from 'mobx-state-tree';

export const User = types
  .model('User', {
    firstName: types.maybeNull(types.string),
    lastName: types.maybeNull(types.string),
    userName: types.maybeNull(types.string)
  })
  .actions(self => ({
    setFirstName(firstName) {
      self.firstName = firstName
    },
    setLastName(lastName) {
      self.lastName = lastName
    },
    setUserName(userName) {
      self.userName = userName
    },
  }))
