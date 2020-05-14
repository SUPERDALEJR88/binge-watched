import { types } from 'mobx-state-tree';
import { ViewStore } from './ViewStore';
import { User } from './User';
import { getUsers, addUser } from '../api/User';

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const GlobalStore = types
  .model('GlobalStore', {
    viewStore: ViewStore,
    users: types.array(User),
  })
  .actions((self) => ({
    loadSelf() {
      self.viewStore = ViewStore.create()
      self.getUsers()
    },
    loadUsers(response) {
      self.users = []
      const { users } = response
      users.forEach((user) => {
        let newUser = User.create()
        newUser.setUserName(user.userName)
        newUser.setFirstName(user.firstName)
        newUser.setLastName(user.lastName)
        self.users.push(newUser)
      })
    },
    async getUsers() {
      let response
      try {
        response = await getUsers()
        self.loadUsers(response)
      } catch (error) {
        let message = error
      }
    },
    async addUser(firstName, lastName, userName) {
      let response
      try {
        response = await addUser(firstName, lastName, userName)
        await sleep(500)
        await self.getUsers()
      } catch (error) {
        let message = error
      }
    }
  }));
