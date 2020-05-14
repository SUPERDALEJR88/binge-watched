import { performFetch } from './BaseApiRemote';

const ip = '192.168.1.103';
const port = '4000';

export const getUserById = (userId) => {
  const url = `http://${ip}:${port}/users/id/${userId}`;
  return performFetch(url, { method: 'GET', });
}

export const getUsers = () => {
  const url = `http://${ip}:${port}/users`;
  const users = performFetch(url, { method: 'GET', });
  return users;
}

export const addUser = (firstName, lastName, userName) => {
  const url = `http://${ip}:${port}/users/addUser`;
  const users = performFetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      userName: userName,
      firstName: firstName,
      lastName: lastName,
    }),
  });
  return
}
